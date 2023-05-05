import { seriesItem } from '@/common/dummyData/series'
import * as S from './seriesDetail.styles'
import PostAnswerList from '../../post-answer/liat/postAnswerList.container'
import PostAnswerWrite from '../../post-answer/write/postAnswerWrite.container'
import { Tag } from 'antd'
import { BodyText } from '@/common/styles/globalStyles'

export default function SeriesDetailUI() {
  return (
    <S.Container>
      <div>
        <S.PostTitle>{seriesItem[0].title}</S.PostTitle>
        <S.PostSubTitle>{seriesItem[0].introduction}</S.PostSubTitle>
        <S.PostTagWapper>
          <S.Category>{seriesItem[0].categories}</S.Category>
          <Tag>주간 2위</Tag>
        </S.PostTagWapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{seriesItem[0].name}</S.Writer>
              <S.CreatedAt>{seriesItem[0].createDate}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.PostUpdateBtnWrapper>
            <button>수정</button>
            <button>삭제</button>
          </S.PostUpdateBtnWrapper>
        </S.Header>
        <S.PriceWrapper>
          <S.Sell>판매가 : <S.Price>{seriesItem[0].price}</S.Price></S.Sell>
          <Tag>장바구니에 담기</Tag>
          <Tag>바로 구매하기</Tag>
        </S.PriceWrapper>
        
        <div style={{ marginBottom: "30px"}}>2개의 포스트 마지막 업데이트 {seriesItem[0].createDate}</div>
        <S.PostWrapper>
          <S.ImageWrapper>
            <S.Image src={seriesItem[0].posts?.first.image} />
          </S.ImageWrapper>
          <S.DescriptionWrapper>
            <S.PostCategory>{seriesItem[0].posts?.first.categories}</S.PostCategory>
            <S.PostName>{seriesItem[0].posts?.first.title}</S.PostName>
            <S.PostName2>{seriesItem[0].posts?.first.intro}</S.PostName2>
            <S.PostIntro>{seriesItem[0].posts?.first.contents}</S.PostIntro>
            <S.PostIntro>{seriesItem[0].posts?.first.createDate}</S.PostIntro>
          </S.DescriptionWrapper>
        </S.PostWrapper>
        <S.PostWrapper>
          <S.ImageWrapper>
            <S.Image src={seriesItem[0].posts?.first.image} />
          </S.ImageWrapper>
          <S.DescriptionWrapper>
            <S.PostCategory>{seriesItem[0].posts?.second.categories}</S.PostCategory>
            <S.PostName>{seriesItem[0].posts?.second.title}</S.PostName>
            <S.PostName2>{seriesItem[0].posts?.second.intro}</S.PostName2>
            <S.PostIntro>{seriesItem[0].posts?.second.contents}</S.PostIntro>
            <S.PostIntro>{seriesItem[0].posts?.second.createDate}</S.PostIntro>
          </S.DescriptionWrapper>
        </S.PostWrapper>
        <S.LikeWrapper>
          <S.Like>
            <img src="/images/heart-outlined.svg" />
          </S.Like>
        </S.LikeWrapper>
      </div>
      {/* 포스트 댓글 */}
      <PostAnswerList />
      <PostAnswerWrite />
    </S.Container>
  )
}
