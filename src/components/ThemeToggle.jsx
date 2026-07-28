import { useEffect, useState } from "react";
import * as S from "./ThemeToggle.styled";

// 라이트 ↔ 다크 테마를 전환합니다.
// <html data-theme="..."> 값만 바꾸면 GlobalStyle 의 CSS 변수가 통째로 교체됩니다.
function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <S.Toggle
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="테마 전환"
      title={isDark ? "라이트 모드" : "다크 모드"}
    >
      {isDark ? "☀" : "☾"}
    </S.Toggle>
  );
}

export default ThemeToggle;
