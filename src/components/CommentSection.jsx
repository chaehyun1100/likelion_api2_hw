import { useEffect, useState } from "react";
import { getComments, createComment, deleteComment } from "../apis/commentApi";
import { formatDate } from "../utils/date";
import * as C from "../styles/common.styled";
import * as S from "./CommentSection.styled";

// 특정 게시글에 대한 댓글 조회 + 작성 폼입니다. 
function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");



  const handleAdd = async () => {

  };

  const handleDelete = async (commentId) => {

  };

  return (
    <S.Wrap>
      <S.Title>{comments.length}개의 댓글</S.Title>

      <S.Form onSubmit={handleAdd}>
        <S.Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="댓글을 작성하세요"
        />
        <S.FormFoot>
          <C.Button type="submit" $primary>댓글 작성</C.Button>
        </S.FormFoot>
      </S.Form>

      <S.List>
        {comments.map((c) => (
          <S.Item key={c.id}>
            <S.ItemTop>
              <S.Meta>
                <b>{c.author ?? "익명"}</b>
                <span>{formatDate(c.createdAt)}</span>
              </S.Meta>
              <S.DeleteBtn onClick={() => handleDelete(c.id)}>삭제</S.DeleteBtn>
            </S.ItemTop>
            <S.CommentBody>{c.content}</S.CommentBody>
          </S.Item>
        ))}
      </S.List>
    </S.Wrap>
  );
}

export default CommentSection;
