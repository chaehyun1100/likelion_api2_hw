import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { createPost } from "../apis/postApi";
import * as S from "../styles/common.styled";

// 글 작성 페이지
function PostWritePage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    // TODO: 글을 작성한 뒤 서버가 돌려준 id를 이용해 상세 페이지로 이동하세요.
    // 작성 실패 시 사용자에게 알림 alert
  };

  return (
    <S.Column>
      <S.PageTitle>새 글 작성</S.PageTitle>
      <PostForm submitLabel="작성하기" onSubmit={handleCreate} />
    </S.Column>
  );
}

export default PostWritePage;
