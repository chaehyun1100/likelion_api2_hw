# DevLog — SV4 과제 (프론트엔드)

velog 스타일의 개발자 블로그를 **실제 API에 연결**하고 **배포**하는 과제입니다.
글(Post)에 대한 **CRUD**를 직접 구현합니다. (댓글은 가산점)

- 스택: React · Vite · React Router · axios · styled-components
- 백엔드: Spring Boot (Render 배포) · 이미지: Cloudinary / Supabase Storage
- 프론트 배포: Netlify

---

## 실행

```bash
npm install
npm run dev
```

> 처음 실행하면 제공된 **환영 게시글**로 UI를 확인할 수 있습니다.
> `/apis` 폴더의 TODO를 구현하고 `.env`에 실제 Render 주소를 넣으면 서버 데이터가 표시됩니다.

### 서버 연결
```bash
cp .env.example .env
# .env 안의 VITE_API_BASE_URL 을 Render 서버 주소로 변경
```

---

## API 계약 (백엔드와 공유하는 기준)

**Post** `{ id, title, content, thumbnail(string|null), tags: string[], author, createdAt }`

| Method | Endpoint | 형식 | 설명 |
| --- | --- | --- | --- |
| GET | `/posts` | — | 목록(최신순) |
| GET | `/posts/{id}` | — | 상세 |
| POST | `/posts` | **multipart/form-data** | 작성 (title, content, author, tags, thumbnail 파일) |
| PATCH | `/posts/{id}` | **multipart/form-data** | 수정 (보낸 필드만) |
| DELETE | `/posts/{id}` | — | 삭제 (204) |
| GET/POST | `/posts/{id}/comments` | **application/json** | 댓글 (가산점) |
| DELETE | `/comments/{id}` | — | 댓글 삭제 |

> 이미지: 프론트는 **파일을 그대로** multipart 로 보냅니다. 서버가 Cloudinary/Supabase 에 올린 뒤 **URL** 을 `thumbnail` 로 돌려줍니다. 프론트는 그 URL 을 `<img>` 로 표시.

---

## 폴더 구조

```
src/
├─ apis/            # 서버 통신 (여기 말고 컴포넌트에서 axios 직접 호출 금지)
│  ├─ axiosInstance.js   # TODO: 공통 인스턴스와 baseURL
│  ├─ postApi.js         # 글 CRUD (multipart)
│  └─ commentApi.js      # 댓글 (JSON)
├─ components/      # 재사용 UI (PostCard, PostForm, CommentSection, ThemeToggle)
├─ pages/           # 라우트 화면 (목록/상세/작성/수정)
├─ router/          # 라우팅 정의
├─ styles/          # GlobalStyle + 공용 styled
├─ mocks/           # 화면에 항상 표시되는 환영 게시글
└─ utils/           # 날짜 포맷 등
```

- styled-components import 규칙: 자기 스타일은 `import * as S`, 공용은 `import * as C`
  ```jsx
  import * as C from "../styles/common.styled";
  import * as S from "./PostCard.styled";
  // <S.Card> ... <C.Tag>
  ```

---

## 필수 요건 (Pass)

1. `apis/` 로 서버 통신 분리 · 컴포넌트에서 생 `axios` 금지
2. `.env` 로 baseURL 관리 (`VITE_API_BASE_URL`)
3. 글 **목록/상세** (Read)
4. 글 **작성** (Create · multipart · 이미지 파일 첨부)
5. 글 **수정** (Update · 기존값 채우고 보낸 필드만)
6. 글 **삭제** (Delete · 204 처리 후 목록 갱신)
7. 에러 상태 처리
8. **Netlify 배포** (`public/_redirects` 로 새로고침 404 방지, 환경변수 등록)

## 가산점
- 댓글 CRUD (JSON) · 다크모드 · 이미지 미리보기 · 빈 상태/스켈레톤 UI

---

## 배포 (Netlify)

1. `npm run build` 로 빌드 에러 없는지 확인 (`dist/` 생성)
2. GitHub 레포 연결 → 프레임워크 **Vite** 자동 감지 (build: `npm run build`, publish: `dist`)
3. 환경변수 **`VITE_API_BASE_URL`** 등록 (로컬 `.env` 는 배포에 안 올라감)
4. `public/_redirects` 의 `/*  /index.html  200` 으로 상세페이지 새로고침 404 방지
5. 서버 주소가 **https** 인지 확인 (http 면 Mixed Content 로 차단)
