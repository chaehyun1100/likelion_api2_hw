// API 연결 여부와 관계없이 화면에 항상 표시하는 디자인 예시 글입니다.
// 실제 서버 데이터와 id가 겹치지 않도록 문자열 id를 사용합니다.
export const DEFAULT_POST_ID = "design-example";

export const defaultPost = {
  id: DEFAULT_POST_ID,
  title: "멋사 게시판에 오신 것을 환영합니다 👋",
  content: `이 글은 과제를 시작할 때 화면 구성을 확인할 수 있도록 제공되는 기본 게시글입니다!

해당 과제를 통해서, 실습을 통해 학습했던 게시글 목록과 상세 조회, 글 작성·수정·삭제 기능을 직접 구현하게 됩니다. 
API 연결 전에는 이 예시 글을 보며 UI를 확인하고, 백엔드 서버를 연결한 뒤에는 서버에서 받아 온 게시글이 이 글과 함께 목록에 표시됩니다.

어렵지 않아요! 다들 화이팅 ✨`,
  thumbnail: "/example-thumb.png",
  tags: ["React", "API", "멋사게시판"],
  author: "머쨍이사자",
  createdAt: "2026-07-28T00:00:00+09:00",
  isDefault: true,
};
