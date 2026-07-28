import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostListPage from "../pages/PostListPage";
import PostWritePage from "../pages/PostWritePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostEditPage from "../pages/PostEditPage";

// 화면(URL) → 페이지 컴포넌트 연결표입니다.
// App 이 공통 레이아웃(헤더)을 그리고, children 이 <Outlet/> 자리에 들어갑니다.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <PostListPage /> },            // /               피드
      { path: "write", element: <PostWritePage /> },          // /write          작성
      { path: "posts/:postId", element: <PostDetailPage /> }, // /posts/1        상세
      { path: "posts/:postId/edit", element: <PostEditPage /> }, // /posts/1/edit 수정
    ],
  },
]);
