import styled from "styled-components";

// 테마 토글 버튼 전용 스타일입니다.
export const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--line-strong);
  background: var(--bg);
  color: var(--sub);
  font-size: 16px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover { background: var(--bg-sub); color: var(--primary); border-color: var(--primary); }
`;
