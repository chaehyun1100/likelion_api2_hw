import styled from "styled-components";

// PostForm 전용 스타일 (velog 작성 화면 느낌). 제출 버튼은 공용 Button.
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--line);
  background: transparent;
  padding: 8px 0;
  font-family: var(--f-body);
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);

  &::placeholder { color: var(--muted); }
  &:focus { outline: none; border-bottom-color: var(--primary); }
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 560px) { flex-direction: column; }
`;

export const SmallInput = styled.input`
  flex: 1;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  padding: 10px 12px;
  font: inherit;
  font-size: 14px;

  &::placeholder { color: var(--muted); }
  &:focus { outline: none; border-color: var(--primary); }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 320px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--bg);
  color: var(--text);
  padding: 16px;
  font-family: var(--f-body);
  font-size: 15px;
  line-height: 1.7;
  resize: vertical;

  &::placeholder { color: var(--muted); }
  &:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px var(--primary-soft); }
`;

export const FileLabel = styled.label`
  font-size: 13px;
  color: var(--muted);
  display: flex;
  flex-direction: column;
  gap: 8px;

  input[type="file"] { color: var(--sub); }
  input[type="file"]::file-selector-button {
    margin-right: 12px;
    padding: 8px 14px;
    border-radius: 20px;
    border: 1px solid var(--line-strong);
    background: var(--bg);
    color: var(--sub);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }
  input[type="file"]::file-selector-button:hover {
    background: var(--primary-soft);
    color: var(--primary-dark);
    border-color: var(--primary);
  }
`;

export const Preview = styled.img`
  width: 100%;
  max-height: 360px;
  object-fit: cover;
  border-radius: var(--radius);
  border: 1px solid var(--line);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 6px;
`;
