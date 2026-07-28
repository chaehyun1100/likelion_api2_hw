import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

// 여러 화면에서 공통으로 쓰는 styled 컴포넌트 모음입니다. (velog 톤)
// 사용법:  import * as C from "../styles/common.styled";  →  <C.Button $primary>

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// 알약형 버튼 — <button>/<Link> 공통. $primary(민트) / $danger.
const buttonBase = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border-radius: 20px;
  border: 1px solid var(--line-strong);
  background: var(--bg);
  color: var(--sub);
  font-family: var(--f-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;

  &:hover { background: var(--bg-sub); }
  &:active { transform: translateY(1px); }

  ${(p) =>
    p.$primary &&
    css`
      background: var(--primary);
      color: #fff;
      border-color: transparent;
      &:hover { background: var(--primary-dark); }
    `}
  ${(p) =>
    p.$danger &&
    css`
      color: var(--danger);
      border-color: transparent;
      background: transparent;
      &:hover { background: var(--bg-sub); color: var(--danger); }
    `}
`;

export const Button = styled.button`
  ${buttonBase}
`;

export const LinkButton = styled(Link)`
  ${buttonBase}
`;

export const PageTitle = styled.h1`
  font-size: clamp(24px, 4vw, 30px);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 8px 0 26px;
`;

export const StateText = styled.p`
  color: ${(p) => (p.$error ? "var(--danger)" : "var(--muted)")};
  text-align: center;
  padding: 72px 0;
  font-size: 15px;
`;

// 포스트 카드 피드 — 넓은 화면에서 자동으로 여러 열. 자식은 순차 등장.
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  align-items: start;

  & > * { animation: ${fadeUp} 0.5s both ease; }
  & > *:nth-child(1) { animation-delay: 0s; }
  & > *:nth-child(2) { animation-delay: 0.05s; }
  & > *:nth-child(3) { animation-delay: 0.1s; }
  & > *:nth-child(4) { animation-delay: 0.15s; }
  & > *:nth-child(5) { animation-delay: 0.2s; }
  & > *:nth-child(n + 6) { animation-delay: 0.25s; }
`;

// 본문/작성 폼처럼 읽기 좋은 좁은 컬럼.
export const Column = styled.div`
  max-width: var(--readw);
  margin: 0 auto;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// 태그 pill — 표시 전용(클릭 이동 없음).
export const Tag = styled.span`
  font-size: 13px;
  color: var(--sub);
  background: var(--bg-sub);
  border-radius: 14px;
  padding: 4px 12px;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover { background: var(--primary-soft); color: var(--primary-dark); }
`;
