import styled from "styled-components";

// PostDetailPage 전용 스타일 (velog 글 상세).
export const Title = styled.h1`
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--line);
`;

export const Meta = styled.div`
  font-size: 14px;
  color: var(--muted);

  b { color: var(--text); font-weight: 700; margin-right: 8px; }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  flex: none;
`;

export const Thumb = styled.img`
  width: 100%;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  margin: 6px 0 28px;
`;

export const Content = styled.article`
  font-size: 16.5px;
  line-height: 1.85;
  color: var(--text);
  white-space: pre-wrap;
  margin-bottom: 28px;
`;
