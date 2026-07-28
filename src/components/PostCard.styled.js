import styled from "styled-components";
import { Link } from "react-router-dom";

// PostCard 전용 스타일 (velog 카드). 카드 전체가 상세로 가는 링크입니다.
export const Card = styled(Link)`
  display: block;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
`;

export const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 1.9 / 1;
  object-fit: cover;
  background: var(--bg-sub);
`;

export const Body = styled.div`
  padding: 16px 16px 4px;
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Excerpt = styled.p`
  margin: 0 0 14px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 10px;
  padding: 12px 16px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--muted);

  b { color: var(--sub); font-weight: 600; }
`;
