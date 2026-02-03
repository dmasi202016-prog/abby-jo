# Cursor WS - Next.js 웹 페이지

현재 위치(Cursor_ws)에서 생성된 Next.js 프로젝트입니다.

## 요구 사항

- **Node.js** 18.17 이상 (LTS 권장)
- [Node.js 다운로드](https://nodejs.org/)

## 시작하기

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속하세요.

3. **빌드**
   ```bash
   npm run build
   ```

4. **프로덕션 실행**
   ```bash
   npm start
   ```

## 프로젝트 구조

- `src/app/` - App Router 페이지 및 레이아웃
- `src/app/page.tsx` - 메인 페이지
- `src/app/layout.tsx` - 루트 레이아웃
- `src/app/globals.css` - 전역 스타일 (Tailwind CSS)

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 빌드된 앱 실행 |
| `npm run lint` | ESLint 실행 |

---

## 웹 호스팅

Next.js 프로젝트를 인터넷에 올리는 방법입니다.

### 1. Vercel (권장)

Next.js를 만든 Vercel이 제공하는 호스팅으로, 설정이 가장 쉽습니다.

1. [vercel.com](https://vercel.com) 가입 후 로그인
2. **Add New** → **Project** 선택
3. GitHub/GitLab/Bitbucket에서 이 저장소 연결 (또는 **Import** → 로컬 폴더 업로드)
4. **Deploy** 클릭

- 무료 플랜 제공
- Git 푸시 시 자동 배포
- HTTPS, CDN 기본 적용

**CLI로 배포하려면:**
```bash
npm i -g vercel
vercel
```
프롬프트에 따라 진행하면 배포 URL이 발급됩니다.

---

### 2. Netlify

1. [netlify.com](https://www.netlify.com) 가입
2. **Add new site** → **Import an existing project**
3. 저장소 연결 후 빌드 설정:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (Netlify가 Next.js 런타임 사용 시 자동 처리)
4. **Deploy** 클릭

무료 플랜, 자동 HTTPS, Git 연동 배포를 지원합니다.

---

### 3. GitHub Pages (정적 내보내기)

GitHub Pages는 **정적 사이트**만 지원하므로, Next.js를 정적 HTML로 내보내야 합니다.

1. **next.config.ts**에 정적 내보내기 설정 추가:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
   };
   ```
2. 빌드: `npm run build` → `out` 폴더 생성
3. GitHub 저장소 → **Settings** → **Pages** → Source를 **GitHub Actions** 또는 **main 브랜치의 /out** 으로 설정

> 주의: `output: "export"` 사용 시 서버 API, 동적 라우팅 등 일부 Next.js 기능은 제한됩니다. 현재처럼 페이지 위주의 사이트라면 대부분 사용 가능합니다.

---

### 4. 기타 옵션

- **Cloudflare Pages** – [pages.cloudflare.com](https://pages.cloudflare.com): 무료, CDN 성능 좋음
- **AWS Amplify** – AWS 계정이 있다면 사용 가능
- **Railway / Render** – Node 서버로 `npm run build` 후 `npm start` 실행하는 방식 지원

---

### 배포 전 체크리스트

- [ ] `npm run build` 로컬에서 성공하는지 확인
- [ ] `.env` 등 비밀키는 호스팅 서비스의 "환경 변수"에만 설정 (코드에 넣지 않기)
- [ ] 필요하면 `next.config.ts` 에 `images.unoptimized: true` (일부 호스팅에서 이미지 최적화 미지원 시)
