import styled from "styled-components";

// CommentSection 전용 스타일 (velog 댓글). 작성 버튼은 공용 Button.
export const Wrap = styled.section`
  margin-top: 48px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
`;

export const Input = styled.textarea`
  width: 100%;
  min-height: 72px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  padding: 12px 14px;
  font: inherit;
  font-size: 14px;
  line-height: 1.6;
  resize: vertical;

  &::placeholder { color: var(--muted); }
  &:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
`;

export const FormFoot = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  padding: 18px 0;
  border-bottom: 1px solid var(--line);

  &:last-child { border-bottom: none; }
`;

export const ItemTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Meta = styled.div`
  font-size: 13px;
  color: var(--muted);

  b { color: var(--text); font-weight: 700; font-size: 14px; margin-right: 8px; }
`;

export const CommentBody = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--sub);
  white-space: pre-wrap;
`;

export const DeleteBtn = styled.button`
  border: none;
  background: none;
  color: var(--muted);
  font-size: 13px;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover { color: var(--danger); }
`;
