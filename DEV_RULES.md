# DEV RULES — MK_SKIN2 개발 규칙

> 마지막 업데이트: 2026-02-28
> 이 규칙은 모든 개발 단계에서 반드시 준수해야 함.

---

## 1. 절대 원칙 (Non-Negotiable)

| # | 규칙 | 이유 |
|---|------|------|
| 1 | **할루시네이션 금지** | 메이크샵 가상태그 오사용 시 스킨이 동작하지 않음 |
| 2 | **사용자 승인 없이 개발 시작 금지** | Phase별 Plan → 승인 → 개발 순서 준수 |
| 3 | **하나의 Phase씩 진행** | 여러 파일 동시 수정 금지, 순차 진행 |
| 4 | **모든 변경사항 MD 파일에 기록** | 진행 상황 추적 및 롤백 대비 |
| 5 | **메이크샵 환경 제약 우선** | 플랫폼 제약을 무시한 구현 방법 사용 금지 |

---

## 2. 파일 구조 규칙

### 2-1. 작업 폴더 구조

```
c:\vibe\mk_skin2\
├── skin_src/                    ← 참고용 원본 스킨 (수정 금지)
├── skin_dev/                    ← 개발 작업 폴더 (Phase 진행 시 생성)
│   ├── header/
│   │   ├── header.css           ← CSS탭 내용
│   │   ├── header.js            ← JS탭 내용
│   │   └── header.html          ← 디자인편집탭 내용
│   ├── footer/
│   │   ├── footer.css
│   │   ├── footer.js
│   │   └── footer.html
│   ├── main/
│   │   ├── main.css
│   │   ├── main.js
│   │   └── main.html
│   ├── product-list/
│   │   ├── product-list.css
│   │   ├── product-list.js
│   │   └── product-list.html
│   ├── product-detail/
│   │   ├── product-detail.css
│   │   ├── product-detail.js
│   │   └── product-detail.html
│   ├── cart/
│   │   ├── cart.css
│   │   ├── cart.js
│   │   └── cart.html
│   ├── category/
│   │   ├── category.css
│   │   ├── category.js
│   │   └── category.html
│   └── common/
│       ├── variables.css        ← CSS 변수 (STYLE_GUIDE 기반)
│       └── base.css             ← Reset + 공통 스타일
├── PROJECT_BRIEF.md
├── STYLE_GUIDE.md
├── DEV_RULES.md
├── MAKESHOP_REFERENCE.md
├── DEVELOPMENT_PLAN.md
└── CHANGELOG.md                 ← 변경 이력 (개발 시작 후 생성)
```

### 2-2. 메이크샵 입력 방식

```
실제 메이크샵 디자인편집 화면에서:

[기본 상단] 선택 시:
  CSS 탭      ← header.css 내용 붙여넣기
  JS 탭       ← header.js 내용 붙여넣기
  디자인편집탭  ← header.html 내용 붙여넣기

[메인] 선택 시:
  CSS 탭      ← main.css
  JS 탭       ← main.js
  디자인편집탭  ← main.html

※ 각 탭에는 해당 내용만 — <style>, <script> 태그 없이 내용만 붙여넣기
```

---

## 3. CSS 코딩 규칙

### 3-1. Tailwind vs 순수 CSS 판단 기준

```
메이크샵에서 Tailwind CDN 사용 가능:
  환경설정 > META 영역에 CDN 스크립트 추가 가능
  → 단, Tailwind v3 CDN Play 모드 (JIT) 사용

충돌 가능 시나리오:
  - 메이크샵 기본 스타일과 Tailwind reset이 충돌
  - 메이크샵 가상태그 생성 HTML에 Tailwind 클래스 부여 어려움
  - !important 남발 문제

결정:
  - 레이아웃/커스텀 컴포넌트: Tailwind 유틸리티 클래스 활용
  - 메이크샵 가상태그로 생성되는 HTML 영역: 순수 CSS (BEM 방식)
  - 충돌 발생 시 해당 섹션만 순수 CSS로 전환
```

### 3-2. BEM 네이밍 (순수 CSS 영역)

```css
/* Block */
.product-card { }

/* Element */
.product-card__thumb { }
.product-card__info { }
.product-card__price { }

/* Modifier */
.product-card--soldout { }
.product-card--pork-theme { }    /* 카테고리 테마 */
.product-card--sea-theme { }
```

### 3-3. CSS 변수 활용 원칙

```css
/* ✅ 올바른 사용 */
.btn-primary {
  background: var(--color-text-primary);
  color: var(--color-white);
  height: var(--btn-height-lg);
}

/* ❌ 하드코딩 금지 */
.btn-primary {
  background: #121212;  /* 하드코딩 금지 */
}
```

### 3-4. 미디어 쿼리 작성 순서

```css
/* 모바일 우선 (Mobile First) 원칙 적용 */
.component {
  /* 기본 (모바일) 스타일 */
}

@media (min-width: 1024px) {
  .component {
    /* PC 스타일 오버라이드 */
  }
}
```

---

## 4. JavaScript 코딩 규칙

### 4-1. 라이브러리 사용 우선순위

```
1순위: 메이크샵 기본 제공 jQuery (별도 로드 불필요)
2순위: GSAP (ScrollTrigger) — 애니메이션
3순위: Swiper.js — 슬라이더
4순위: 순수 JavaScript (Vanilla JS)

⚠️ 금지: React, Vue, Angular (메이크샵 환경 부적합)
⚠️ 금지: Framer Motion (React 의존)
⚠️ 금지: 대용량 번들 라이브러리 (CDN 로드 지연)
```

### 4-2. 이벤트 바인딩 패턴

```javascript
// ✅ jQuery 방식 (메이크샵 기본)
jQuery(document).ready(function($) {
  // 코드 작성
});

// ✅ 또는 DOMContentLoaded (Vanilla)
document.addEventListener('DOMContentLoaded', function() {
  // 코드 작성
});

// ❌ 금지 — 전역 스코프 오염
var myVar = 'global'; // 전역변수 남발 금지
```

### 4-3. GSAP 초기화 패턴

```javascript
// ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

// 히어로 섹션 예시
gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true
  }
})
.from(".hero-title", { y: 60, opacity: 0, duration: 1 })
.from(".hero-sub",   { y: 40, opacity: 0, duration: 0.8 }, "-=0.5");
```

### 4-4. 성능 주의 사항

```javascript
// ✅ 이벤트 throttle 적용 (스크롤 이벤트)
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    requestAnimationFrame(function() {
      // 스크롤 처리 코드
      ticking = false;
    });
    ticking = true;
  }
});

// ❌ 금지 — 스크롤마다 DOM 쿼리
window.addEventListener('scroll', function() {
  document.querySelector('.header').style.opacity = ...; // 매 프레임 DOM 쿼리 금지
});
```

---

## 5. 메이크샵 제약사항

### 5-1. 사용 가능한 것

| 항목 | 가능 여부 | 비고 |
|------|---------|------|
| CDN 외부 라이브러리 | ✅ | 환경설정 > META 영역 |
| CSS 변수 (Custom Properties) | ✅ | 최신 브라우저 지원 |
| Flexbox / Grid | ✅ | |
| GSAP / Swiper | ✅ | CDN 로드 |
| Google Fonts / Pretendard CDN | ✅ | |
| 가상태그 (Virtual Tags) | ✅ | MAKESHOP_REFERENCE.md 참고 |
| 인라인 SVG | ✅ | |

### 5-2. 주의/제한 사항

| 항목 | 제한 여부 | 대응 방법 |
|------|---------|---------|
| 서버사이드 코드 (PHP 등) | ❌ 불가 | 가상태그로 대체 |
| npm 빌드 프로세스 | ❌ 불가 | CDN 또는 인라인 |
| Tailwind CSS 빌드 | ❌ 불가 | CDN Play 모드만 |
| 커스텀 서버 API | ❌ 불가 | 메이크샵 제공 API만 |
| `<iframe>` 외부 도메인 | ⚠️ 제한적 | 허용된 도메인만 |
| CSS `@import` 다수 | ⚠️ 주의 | 성능 저하 가능 |

### 5-3. 메이크샵 CSS 변수 (`cw-` prefix)

메이크샵이 기본 제공하는 CSS 변수 — **덮어쓰기 시 주의**

```css
/* 메이크샵 기본 제공 변수 (읽기 전용으로 취급) */
var(--cw-heading-color)   /* 제목 색상 */
var(--cw-point-color)     /* 포인트 색상 */
var(--cw-color-20)        /* 연한 회색 */
var(--cw-color-30)        /* 테두리 회색 */
var(--cw-color-60)        /* 중간 텍스트 */
var(--cw-color-80)        /* 진한 텍스트 */
var(--cw-color-90)        /* 거의 검정 */

/* 우리 변수는 --mk- 또는 --color- prefix로 구분 */
```

---

## 6. 접근성 (Accessibility) 규칙

```
필수:
  - 이미지에 alt 속성 (의미없는 이미지는 alt="")
  - 버튼에 aria-label (아이콘 전용 버튼)
  - 폼 요소에 label 연결
  - focus 스타일 제거 금지 (outline: none 남발 금지)
  - prefers-reduced-motion 대응 (동영상, 애니메이션)
  - 색상 대비 WCAG AA 기준 (4.5:1 이상)

권장:
  - 키보드 네비게이션 가능
  - 스크린리더 대응 (sr-only 클래스)
```

---

## 7. 성능 기준 (목표)

| 지표 | 목표값 |
|------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| 총 페이지 무게 (이미지 제외) | < 500KB |
| 히어로 비디오 용량 | PC: ≤ 8MB, 모바일: ≤ 4MB |
| 외부 CDN 스크립트 수 | ≤ 5개 |

---

## 8. 코드 리뷰 체크리스트

각 Phase 완료 전 반드시 확인:

```
HTML:
  [ ] 가상태그 문법 오류 없음 (<!--/태그명/--> 형식)
  [ ] 시맨틱 태그 사용 (section, article, nav, main, header, footer)
  [ ] alt 속성 모든 img에 존재
  [ ] id 중복 없음

CSS:
  [ ] CSS 변수 하드코딩 없음
  [ ] 미디어쿼리 breakpoint 일관성
  [ ] 불필요한 !important 없음
  [ ] 사용되지 않는 스타일 없음

JavaScript:
  [ ] 전역 변수 최소화
  [ ] 콘솔 에러 없음
  [ ] 메모리 누수 없음 (이벤트 리스너 정리)
  [ ] jQuery $ 충돌 없음 ($ → jQuery 또는 IIFE 사용)

메이크샵 가상태그:
  [ ] MAKESHOP_REFERENCE.md 기준으로 검증
  [ ] if/end_if 쌍 매칭 확인
  [ ] loop/end_loop 쌍 매칭 확인
  [ ] 미지원 태그 사용 금지

반응형:
  [ ] PC(1024px+) 레이아웃 확인
  [ ] 모바일(375px~) 레이아웃 확인
  [ ] 태블릿(768px) 주요 확인 포인트 없는지
  [ ] 텍스트 오버플로우 없음
  [ ] 이미지 비율 유지
```

---

## 9. 커밋 규칙

```
형식: [Phase번호] 작업내용 (영어)

예시:
  [P1] Add CSS variables and base typography
  [P2] Implement responsive header with mobile drawer
  [P3] Add GSAP scrollytelling hero section
  [P5] Complete 2-column sticky layout for product detail
  [FIX] Fix makeshop virtual tag syntax in product list loop
  [DOCS] Update DEVELOPMENT_PLAN.md with P2 completion
```
