# YouTube API 기반 개발자 학습 영상 모음 웹 서비스

> 개발자와 자격증 학습자를 위한 YouTube 학습 영상을 카테고리별로 탐색하고, 검색·채널·영상 상세 페이지를 통해 학습 흐름을 이어갈 수 있는 영상 모음 웹 서비스입니다.

## 배포 링크

- Demo: https://devtube-fe.vercel.app/

## 프로젝트 소개

DevTube는 개발자 학습 영상과 자격증 강의 영상을 한곳에서 탐색할 수 있도록 만든 개인 프로젝트입니다.

YouTube에는 학습 자료가 많지만, 초보 학습자는 어떤 영상을 먼저 봐야 할지 판단하기 어렵습니다.  
이 프로젝트는 추천 영상, 추천 개발자, 자격증 강의 카테고리, 검색 결과, 채널 상세, 영상 상세 페이지를 제공해 사용자가 학습 목적에 맞는 영상을 빠르게 찾을 수 있도록 구성했습니다.

단순히 API 데이터를 화면에 출력하는 데서 끝내지 않고, 모바일 재생 문제, API 요청 한도, 로딩 상태, 이미지·폰트 최적화, 접근성, SEO, 코드 품질 자동화까지 개선하며 실제 서비스에 가까운 완성도를 목표로 했습니다.

## 주요 기능

- 추천 영상 및 추천 개발자 목록 제공
- 정보처리기사 필기/실기, 웹디자인개발기능사 필기/실기, SQLD 강의 카테고리 제공
- 키워드 기반 YouTube 영상 검색
- 영상 상세 페이지에서 YouTube iframe 재생
- 채널 상세 정보 및 채널별 최신 영상 목록 제공
- 검색 결과 및 채널 영상 더보기 페이지네이션
- API 로딩 상태에 맞춘 YouTube 스타일 스켈레톤 UI
- API 에러 상태와 429 요청 한도 초과 전용 메시지 처리
- 반응형 레이아웃 및 모바일 사이드바 지원
- 페이지별 SEO 메타 정보 갱신
- 접근성 속성 보강

## 기술 스택

| 영역         | 기술                 |
| ------------ | -------------------- |
| Frontend     | React, Vite          |
| Routing      | React Router         |
| Server State | TanStack React Query |
| API Client   | Axios                |
| Styling      | SCSS, Swiper         |
| Icons        | React Icons          |
| API          | RapidAPI YouTube API |
| Code Quality | ESLint, Prettier     |
| Deploy       | Vercel               |

## 기술적 의사결정

### React Query로 서버 상태 관리 전환

초기에는 `useEffect`와 로컬 상태로 API 요청을 관리했습니다.  
하지만 검색, 채널 상세, 영상 상세처럼 API 요청이 반복되는 페이지가 늘어나면서 캐싱, 중복 요청 방지, 로딩·에러 상태 관리가 분산되는 문제가 있었습니다.

이를 해결하기 위해 TanStack React Query를 도입했습니다.

- `useQuery`로 영상 상세, 채널 상세 데이터 관리
- `useInfiniteQuery`로 검색 결과와 채널 영상 더보기 처리
- `queryKey` 기반 캐싱으로 동일 요청 중복 방지
- `staleTime`, `gcTime` 설정으로 불필요한 API 호출 감소
- `AbortSignal` 연결로 라우트 이동 시 불필요한 요청 취소
- 429, 401, 403, 500대 에러를 구분해 사용자 메시지 제공

### 모바일 영상 재생 문제 해결

모바일 디바이스 환경에서 영상이 처음에는 재생되지만 이후 일시정지나 다른 컨트롤이 동작하지 않는 문제가 있었습니다.

원인은 반응형 레이아웃과 플레이어 레이어가 겹치면서 모바일 터치 이벤트가 iframe에 안정적으로 전달되지 않는 구조였습니다.  
이를 해결하기 위해 영상 상세 페이지를 직접 YouTube iframe 방식으로 정리하고, 플레이어와 사이드바의 z-index 구조를 재조정했습니다.

결과적으로 iPhone SE와 같은 좁은 모바일 뷰포트에서도 재생, 일시정지, 컨트롤 조작이 정상 동작하도록 개선했습니다.

### 로딩 UX 개선

API 응답 전 빈 화면이 노출되면 사용자는 서비스가 멈췄다고 느낄 수 있습니다.  
이를 개선하기 위해 실제 레이아웃과 유사한 스켈레톤 UI를 공통 컴포넌트로 구성했습니다.

- 검색 결과 스켈레톤
- 채널 상세 스켈레톤
- 영상 상세 스켈레톤

또한, 실제 API 요청이 필요한 페이지에만 스켈레톤을 적용하고, 정적 이미지는 fade-in 애니메이션을 적용하였습니다.

### 성능 최적화

초기 렌더링과 리소스 로딩 비용을 줄이기 위해 다음 작업을 진행했습니다.

- TTF 폰트를 WOFF2로 변환하고 불필요한 폰트 제거
- 첫 화면 주요 이미지는 eager 로딩 유지
- 목록·슬라이더·하단 이미지는 lazy loading 적용
- `decoding="async"`와 `width`, `height` 적용으로 이미지 디코딩 및 레이아웃 밀림 개선
- 검색 결과 썸네일을 `background-image`에서 실제 `img` 태그로 변경
- 깨진 이미지에 대한 fallback 처리 추가

### 접근성과 SEO 개선

포트폴리오 프로젝트라도 실제 사용자를 고려한 기본 접근성과 SEO는 필요하다고 판단했습니다.

- 햄버거 메뉴에 `aria-expanded`, `aria-controls`, 상태별 `aria-label` 적용
- 현재 메뉴에 `aria-current="page"` 적용
- 검색 영역을 `form role="search"` 구조로 변경
- iframe title 보강
- 조회수, 좋아요, 댓글 등 통계 정보에 스크린리더용 label 추가
- 페이지별 `title`, `description`, Open Graph, Twitter meta 갱신
- 404 페이지를 실제 안내 페이지로 개선

## 트러블슈팅

### 1. API 요청 한도 초과 문제

RapidAPI 기반 YouTube API는 요청 한도가 있기 때문에, 같은 페이지를 여러 번 이동하거나 검색을 반복하면 429 에러가 발생할 수 있었습니다.

해결 방법:

- React Query 캐싱으로 같은 요청 중복 방지
- 429 에러는 재시도 버튼을 숨기고 별도 안내 문구 제공
- 4xx 에러는 자동 retry하지 않도록 설정

```txt
API 요청 한도를 초과했습니다. 한도가 초기화된 후 다시 이용해주세요.
```

### 2. 모바일 iframe 터치 이벤트 문제

반응형 환경에서 iframe 위에 다른 레이어가 겹치거나 z-index가 잘못 잡히면 YouTube 컨트롤 클릭이 정상 동작하지 않을 수 있었습니다.

해결 방법:

- ReactPlayer 제거 후 YouTube iframe 직접 사용
- iframe을 플레이어 영역에 absolute fill 구조로 배치
- 플레이어, 헤더, 사이드바의 z-index를 명확히 분리
- 모바일 사이드바가 항상 영상 위에 위치하도록 구조 조정

### 3. 빈 화면 대신 명확한 로딩·에러 상태 제공

API 요청 중에는 스켈레톤 UI를 보여주고, 실패 시에는 콘솔 에러만 남기는 대신 사용자에게 명확한 메시지를 보여주도록 개선했습니다.

## 폴더 구조

```txt
src
├─ assets
│  ├─ fonts
│  ├─ img
│  └─ scss
├─ components
│  ├─ common
│  ├─ contents
│  ├─ header
│  ├─ section
│  ├─ skeleton
│  └─ video
├─ data
├─ pages
└─ utils
```

## 실행 방법

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경변수 설정

프로젝트 루트에 `.env` 파일을 만들고 RapidAPI Key를 설정합니다.

```bash
VITE_RAPID_API_KEY=your_rapidapi_key
```

또는 예시 파일을 복사해 사용할 수 있습니다.

```bash
cp .env.example .env
```

Windows PowerShell에서는 다음 명령을 사용할 수 있습니다.

```powershell
Copy-Item .env.example .env
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 프로덕션 빌드

```bash
npm run build
```

### 5. 빌드 결과 미리보기

```bash
npm run preview
```

## 품질 검증 명령어

```bash
npm run lint
npm run format:check
npm run build
```

## 프로젝트를 통해 개선한 역량

- React 컴포넌트 구조 설계
- React Router 기반 페이지 라우팅
- React Query를 활용한 서버 상태 관리
- API 요청 캐싱, 페이지네이션, 에러 처리
- 모바일 반응형 UI 문제 해결
- iframe 기반 외부 플레이어 제어 이슈 해결
- SCSS 기반 스타일 구조화
- 스켈레톤 UI를 활용한 로딩 UX 개선
- 이미지, 폰트, SEO, 접근성 최적화
- ESLint와 Prettier 기반 코드 품질 관리

## 회고

이 프로젝트는 단순한 YouTube 클론이 아니라, 외부 API 기반 서비스에서 자주 발생하는 로딩, 에러, 요청 한도, 반응형 레이아웃, 접근성 문제를 직접 다루며 개선한 프로젝트입니다.

처음에는 데이터를 불러와 화면에 보여주는 기능 구현에 집중했지만, 이후 사용자 입장에서 불편한 지점을 하나씩 발견하고 개선했습니다.  
특히, 모바일 영상 컨트롤 문제와 API 요청 한도 문제를 해결하면서, 프론트엔드 개발은 UI 구현뿐 아니라 브라우저 동작, 네트워크 상태, 사용자 경험까지 함께 고려해야 한다는 점을 배웠습니다.

앞으로는 테스트 코드와 CI 파이프라인을 추가해 기능 안정성을 더 높이고, API 응답 데이터를 정규화해 유지보수성을 개선할 계획입니다.
