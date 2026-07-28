import { useEffect, useState } from "react";
import { getPosts } from "../apis/postApi";
import { defaultPost } from "../mocks/defaultPost";
import PostCard from "../components/PostCard";
import * as S from "../styles/common.styled";

function PostListPage() {
  const [posts, setPosts] = useState([defaultPost]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // TODO: 게시글 목록을 불러와 posts에 저장
      // 요청 실패 시 에러 상태도 함께 처리
      // 제공된 환영 글(defaultPost)은 목록에서 계속 보이도록 처리합니당
    };

    fetchPosts();
  }, []);

  return (
    <section>
      <S.PageTitle>최신 글</S.PageTitle>

      {error && <S.StateText $error>{error}</S.StateText>}
      <S.Grid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </S.Grid>
    </section>
  );
}

export default PostListPage;
