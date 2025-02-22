### **프론트엔드 난이도 & 고려 사항**

**1. 로그인 흐름**

- 카카오 로그인 API 연동 → Redirect URI, 인가 코드 처리
- 토큰 관리(쿠키/로컬스토리지), 만료 & 재발급 처리

**2. 실시간 이벤트 참여**

- 실시간 응답 UX → WebSocket/SSE 경험 쌓기
- 로딩 상태, 실패 리트라이, 성공 응답 처리 등 사용자 경험 설계

**3. 이벤트 생성 / 관리**

- 권한 분기(관리자 메뉴 노출/비활성화)
- 폼 검증, 날짜 선택, 상품 등록 등 복합 폼 구성 경험

**4. 응모 내역 및 결과 조회**

- 테이블 뷰 + 페이징(무한스크롤 or 페이지네이션)
- 당첨 여부 강조 UX

**5. 알림톡 / 메일 상태**

- 발송 여부, 실패 시 재시도 표시 등 추가하면 실무 감각↑

**⚙️ 기술 성장 포인트**

- 상태관리(Zustand, Redux Toolkit 등) 활용 → 실시간 참여 상태 & 결과 반영
- 비동기 처리(useQuery, SWR 등) 패턴 익숙해지기
- 실시간 기술(WebSocket, SSE) 직접 구현해보며 체득


# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
# event-rush-view
