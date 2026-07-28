import { useState } from "react";
import * as C from "../styles/common.styled";
import * as S from "./PostForm.styled";

// 글 작성/수정에서 함께 쓰는 폼입니다.
function PostForm({ initial = {}, submitLabel = "작성하기", onSubmit }) {
  const [title, setTitle] = useState(initial.title ?? "");
  const [content, setContent] = useState(initial.content ?? "");
  const [author, setAuthor] = useState(initial.author ?? "");
  const [tagsText, setTagsText] = useState((initial.tags ?? []).join(", "));
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(initial.thumbnail ?? null);

  const handleFileChange = (e) => {
    const file = e.target.files[0] ?? null;
    setImageFile(file);
    if (file) setPreview(URL.createObjectURL(file)); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // TODO: 입력받은 글 정보와 이미지 파일을 formData에 담기
    // tagsText는 쉼표를 기준으로 나눈 뒤 각각 "tags"라는 이름으로 추가

    onSubmit(formData); // 완성한 formData를 부모에게 전달
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.TitleInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
        required
      />

      <S.Row>
        <S.SmallInput
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="작성자 닉네임"
        />
        <S.SmallInput
          value={tagsText}
          onChange={(e) => setTagsText(e.target.value)}
          placeholder="태그 (쉼표로 구분: React, Vite)"
        />
      </S.Row>

      <S.Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요..."
        required
      />

      <S.FileLabel>
        대표 이미지 (선택)
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </S.FileLabel>

      {preview && <S.Preview src={preview} alt="미리보기" />}

      <S.Actions>
        <C.Button type="submit" $primary>
          {submitLabel}
        </C.Button>
      </S.Actions>
    </S.Form>
  );
}

export default PostForm;
