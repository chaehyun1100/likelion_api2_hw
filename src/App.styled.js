import styled from "styled-components";
import { Link } from "react-router-dom";

// App(공통 레이아웃) 전용 스타일 (velog 톤)
export const Layout = styled.div`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 32px);
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 64px;
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  margin-bottom: 36px;
`;

export const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.02em;

  span { color: var(--primary); }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Main = styled.main`
  padding-bottom: 96px;
`;
