import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { getPost, updatePost } from "../apis/postApi";
import * as S from "../styles/common.styled";

// 글 수정 페이지
// 기존 글을 불러와 폼에 채운 뒤, 수정 내용을 PATCH 로 보냅니다.
function PostEditPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [initial, setInitial] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      // TODO: 수정할 게시글을 불러와 initial에 저장하세요.
    };

    fetchPost();
  }, [postId]);

  const handleUpdate = async (formData) => {
    // TODO: 게시글을 수정한 뒤 수정된 게시글의 상세 페이지로 이동하세요.
  };

  if (!initial) return <S.StateText $error>글을 찾을 수 없어요.</S.StateText>;

  return (
    <S.Column>
      <S.PageTitle>글 수정</S.PageTitle>
      <PostForm initial={initial} submitLabel="수정하기" onSubmit={handleUpdate} />
    </S.Column>
  );
}

export default PostEditPage;
