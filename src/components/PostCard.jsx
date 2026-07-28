import { formatDate } from "../utils/date";
import * as C from "../styles/common.styled";
import * as S from "./PostCard.styled";

// props.post = { id, title, content, thumbnail, tags, author, createdAt }
function PostCard({ post }) {
  return (
    <S.Card to={`/posts/${post.id}`}>
      {/* 썸네일은 null 일 수 있으니 있을 때만 */}
      {post.thumbnail && <S.Thumb src={post.thumbnail} alt="" />}

      <S.Body>
        <S.Title>{post.title}</S.Title>
        <S.Excerpt>{post.content}</S.Excerpt>

        <C.TagList>
          {post.tags?.map((tag) => (
            <C.Tag key={tag}>{tag}</C.Tag>
          ))}
        </C.TagList>
      </S.Body>

      <S.Footer>
        <span><b>{post.author}</b></span>
        <span>{formatDate(post.createdAt)}</span>
      </S.Footer>
    </S.Card>
  );
}

export default PostCard;
