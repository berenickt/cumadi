import BasicButton from '@/components/common/buttons/basic'
import * as S from './postAnswerWrite.styles'

export default function PostAnswerWriteUI() {
  return (
    <S.Container>
      <S.AvatarWrapper>
        <S.Avatar src="/images/avatar.png" />
        <span>개발자 A</span>
      </S.AvatarWrapper>
      <S.CommentTextArea
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시
                모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <S.ButtonWrapper>
        <div>
          <span>0</span> / 100
        </div>
        <BasicButton movePage={'/login'} name={'댓글 작성하기'} isMain={true} />
      </S.ButtonWrapper>
    </S.Container>
  )
}
