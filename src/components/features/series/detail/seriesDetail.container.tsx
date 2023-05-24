import React from 'react'
import SeriesDetailUI from './seriesDetail.presenter'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '@apollo/client'
import { Modal } from 'antd'
import { useRecoilState } from 'recoil'
import { buyItemId } from '@/common/store'
import { DELETE_SERIES, FETCH_SERIES, FETCH_USER_LOGGED_IN, INSERT_SERIES_IN_CART } from './seriesDetail.query'

export default function SeriesDetail() {
  const router = useRouter()
  const seriesId = String(router.query.seriesId)
  const [buySeriesId, setBuySeriesId] = useRecoilState(buyItemId)

  const { data: user } = useQuery(FETCH_USER_LOGGED_IN)
  const { data } = useQuery(FETCH_SERIES, { variables: { seriesId } })
  const [addCart] = useMutation(INSERT_SERIES_IN_CART)
  const [deleteSeries] = useMutation(DELETE_SERIES)

  const isWriterData = data?.fetchSeries?.user.userId === user?.fetchUserLoggedIn?.userId ? true : false

  const onClickDelete = async () => {
    if (!confirm('정말로 삭제하시겠습니까?')) return false
    try {
      await deleteSeries({
        variables: { seriesId },
      })
      Modal.success({ content: '시리즈가 삭제되었습니다.' })
      void router.push('/series')
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickCart = async () => {
    try {
      await addCart({
        variables: { seriesId },
      })
      Modal.success({ content: '장바구니에 담겼습니다.' })
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  const onClickBuy = () => {
    setBuySeriesId(seriesId)
    void router.push('/purchase')
  }

  return (
    <SeriesDetailUI
      data={data}
      isWriterData={isWriterData}
      onClickDelete={onClickDelete}
      onClickCart={onClickCart}
      onClickBuy={onClickBuy}
    />
  )
}
