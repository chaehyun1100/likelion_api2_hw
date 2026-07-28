import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../apis/postApi";
import { defaultPost, DEFAULT_POST_ID } from "../mocks/defaultPost";
import CommentSection from "../components/CommentSection";
import { formatDate } from "../utils/date";
import * as C from "../styles/common.styled";
import * as S from "./PostDetailPage.styled";

// 글 상세 페이지 (상세조회 / 수정이동 / 삭제 / 댓글)
function PostDetailPage() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (postId === DEFAULT_POST_ID) {
      setPost(defaultPost);
      return;
    }

    const fetchPost = async () => {
      // TODO: postId에 해당하는 게시글을 불러와 post에 저장하세요.
      // 요청 실패 시 에러 상태도 함께 처리하세요.
    };

    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    if (!window.confirm("이 글을 삭제할까요?")) return;

    // TODO: 현재 게시글을 삭제한 뒤 목록 페이지로 이동하세요.
  };

  if (error) return <C.StateText $error>{error}</C.StateText>;
  if (!post) return null;

  return (
    <C.Column>
      <S.Title>{post.title}</S.Title>

      <S.MetaRow>
        <S.Meta>
          <b>{post.author}</b>
          <span>{formatDate(post.createdAt)}</span>
        </S.Meta>
        {!post.isDefault && (
          <S.Actions>
            <C.LinkButton to={`/posts/${post.id}/edit`}>수정</C.LinkButton>
            <C.Button $danger onClick={handleDelete}>삭제</C.Button>
          </S.Actions>
        )}
      </S.MetaRow>

      {post.tags?.length > 0 && (
        <C.TagList style={{ marginBottom: "24px" }}>
          {post.tags.map((tag) => (
            <C.Tag key={tag}>{tag}</C.Tag>
          ))}
        </C.TagList>
      )}

      {post.thumbnail && <S.Thumb src={post.thumbnail} alt="" />}

      <S.Content>{post.content}</S.Content>

      {!post.isDefault && <CommentSection postId={post.id} />}
    </C.Column>
  );
}

export default PostDetailPage;
