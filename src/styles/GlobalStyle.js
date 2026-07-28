import { createGlobalStyle } from "styled-components";

// 앱 전체 전역 스타일 (리셋 + 폰트 + 디자인 토큰)
// 콘셉트: velog처럼 깔끔한 개발자 블로그. 흰 배경 + 주황 포인트 + 넉넉한 여백.
// 기본은 라이트, data-theme="dark" 면 다크.
export const GlobalStyle = createGlobalStyle`
  /* ── 라이트(기본) ── */
  :root {
    --bg:      #ffffff;
    --bg-sub:  #f8f9fa;   /* 살짝 눌린 배경 */
    --card:    #ffffff;
    --text:    #212529;
    --sub:     #495057;
    --muted:   #868e96;
    --line:    #e9ecef;
    --line-strong: #dee2e6;

    --primary:      #FB6C00;
    --primary-dark: #E73F1E;
    --primary-soft: #FFDD9C;
    --danger:       #45A9A9;

    --radius: 6px;
    --shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    --maxw: 1200px;     /* 피드 */
    --readw: 768px;     /* 본문/폼 컬럼 */

    --f-body: "Pretendard", "Pretendard Variable", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Malgun Gothic", sans-serif;
    --f-mono: ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace;
  }

  /* ── 다크 ── */
  :root[data-theme="dark"] {
    --bg:      #1e1e1e;
    --bg-sub:  #161616;
    --card:    #252525;
    --text:    #ececec;
    --sub:     #c1c1c1;
    --muted:   #8b8b8b;
    --line:    #303030;
    --line-strong: #3f3f3f;

    --primary:      #FB6C00;
    --primary-dark: #FF8A3D;
    --primary-soft: #4A2512;
    --danger:       #45A9A9;

    --shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
  }

  :root[data-theme="light"] {
    --bg: #ffffff; --bg-sub: #f8f9fa; --card: #ffffff;
    --text: #212529; --sub: #495057; --muted: #868e96;
    --line: #e9ecef; --line-strong: #dee2e6;
    --primary: #FB6C00; --primary-dark: #E73F1E; --primary-soft: #FFDD9C; --danger: #45A9A9;
    --shadow: 0 4px 16px rgba(0,0,0,0.08);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    margin: 0;
    min-height: 100dvh;
    background: var(--bg);
    color: var(--text);
    font-family: var(--f-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }

  ::selection { background: var(--primary); color: #fff; }
  :focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`;
