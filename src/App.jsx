import { Outlet } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import * as C from "./styles/common.styled";
import * as S from "./App.styled";

// 모든 페이지가 공유하는 레이아웃입니다. (헤더 + 본문)
function App() {
  return (
    <S.Layout>
      <S.Header>
        <S.Logo to="/">
          멋사 <span>게시판</span>
        </S.Logo>
        <S.HeaderRight>
          <ThemeToggle />
          <C.LinkButton to="/write" $primary>
            새 글 작성
          </C.LinkButton>
        </S.HeaderRight>
      </S.Header>

      <S.Main>
        {/* 각 페이지가 이 자리에 렌더링됩니다. */}
        <Outlet />
      </S.Main>
    </S.Layout>
  );
}

export default App;
