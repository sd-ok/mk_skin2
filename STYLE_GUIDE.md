# STYLE GUIDE — MK_SKIN2 프리미엄 스킨

> 마지막 업데이트: 2026-02-28
> 이 문서는 개발 중 컬러/타이포/스페이싱/애니메이션 기준으로 사용됨.

---

## 1. 디자인 철학

| 원칙 | 설명 |
|------|------|
| **Premium Restraint** | 과하지 않게, 여백과 디테일로 고급스러움을 표현 |
| **Category Identity** | 카테고리별 컬러 시스템으로 즉각적인 브랜드 인식 |
| **Motion with Purpose** | 모든 애니메이션은 사용자 경험을 향상시키는 목적이 있어야 함 |
| **Performance First** | 시각적 품질과 성능 사이의 균형 (LCP < 2.5s 목표) |

---

## 2. 컬러 시스템

### 2-1. CSS Custom Properties (Root 정의)

```css
:root {
  /* ── Base Neutrals ─────────────────────── */
  --color-white:        #FFFFFF;
  --color-bg:           #F8F6F4;       /* 페이지 배경 (웜 오프화이트) */
  --color-bg-subtle:    #F0EDE9;       /* 섹션 구분용 밝은 배경 */
  --color-border:       #E4DDD8;       /* 기본 테두리 */
  --color-border-strong:#C8BDB7;       /* 강조 테두리 */

  /* ── Text ──────────────────────────────── */
  --color-text-primary: #121212;       /* 본문 주요 텍스트 */
  --color-text-secondary:#5A5A5A;      /* 부가 텍스트 */
  --color-text-muted:   #999999;       /* 비활성/설명 텍스트 */
  --color-text-inverse: #FFFFFF;       /* 다크 배경 위 텍스트 */

  /* ── Brand (공통 포인트) ────────────────── */
  --color-brand:        #8B1A1A;       /* 브랜드 포인트 (다크레드) */
  --color-brand-light:  #A52020;
  --color-brand-dark:   #6B1414;

  /* ── 카테고리 테마 컬러 ──────────────────── */

  /* 돈육 (Pork) — Black / Dark Red 계열 */
  --pork-bg:            #0D0D0D;       /* 거의 순수 블랙 */
  --pork-bg-2:          #1A1A1A;       /* 카드/섹션 배경 */
  --pork-accent:        #8B1A1A;       /* 포인트 (다크레드) */
  --pork-accent-light:  #C0392B;       /* 호버/강조 */
  --pork-text:          #F5F0ED;       /* 본문 텍스트 */
  --pork-text-muted:    #999999;
  --pork-border:        #2A2A2A;

  /* 수산 (Seafood) — Dark Blue 계열 */
  --sea-bg:             #050D1A;       /* 딥 오션 블랙블루 */
  --sea-bg-2:           #0A1628;       /* 카드/섹션 배경 */
  --sea-accent:         #1A4A8B;       /* 포인트 (딥 블루) */
  --sea-accent-light:   #2563EB;       /* 호버/강조 */
  --sea-accent-vivid:   #38BDF8;       /* 강조 하이라이트 */
  --sea-text:           #EAF2FF;       /* 본문 텍스트 */
  --sea-text-muted:     #7099CC;
  --sea-border:         #0F2040;

  /* ── Status ────────────────────────────── */
  --color-success:      #16A34A;
  --color-error:        #DC2626;
  --color-warning:      #D97706;
  --color-info:         #2563EB;

  /* ── Overlay ───────────────────────────── */
  --overlay-dark:       rgba(0,0,0,0.6);
  --overlay-darker:     rgba(0,0,0,0.85);
  --overlay-light:      rgba(255,255,255,0.08);
}
```

### 2-2. 컬러 사용 예시

| 용도 | Light (공통) | 돈육 테마 | 수산 테마 |
|------|------------|---------|---------|
| 페이지 배경 | `#F8F6F4` | `#0D0D0D` | `#050D1A` |
| 포인트 컬러 | `#8B1A1A` | `#8B1A1A` | `#1A4A8B` |
| 버튼 기본 | `#121212` | `#8B1A1A` | `#1A4A8B` |
| CTA 버튼 | `#121212` bg + white text | `#C0392B` bg | `#2563EB` bg |
| 텍스트 주요 | `#121212` | `#F5F0ED` | `#EAF2FF` |

---

## 3. 타이포그래피

### 3-1. 폰트

```css
:root {
  --font-base: "Pretendard Variable", Pretendard, -apple-system,
               BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
               "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
               "Malgun Gothic", sans-serif;
  --font-display: var(--font-base); /* 영문 디스플레이 타이틀용 (필요시 별도 영문 폰트 추가) */
}
```

### 3-2. 타입 스케일

```css
:root {
  /* Font Sizes */
  --text-2xs:   0.625rem;   /* 10px — 법적 고지 */
  --text-xs:    0.75rem;    /* 12px — 캡션, 태그 */
  --text-sm:    0.8125rem;  /* 13px — 보조 텍스트 */
  --text-base:  0.875rem;   /* 14px — 본문 기본 */
  --text-md:    1rem;       /* 16px — 소제목 */
  --text-lg:    1.125rem;   /* 18px — 중간 제목 */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px — 섹션 제목 */
  --text-3xl:   2rem;       /* 32px — 페이지 제목 */
  --text-4xl:   2.5rem;     /* 40px — 히어로 서브 */
  --text-5xl:   3.5rem;     /* 56px — 히어로 메인 (PC) */
  --text-6xl:   5rem;       /* 80px — 히어로 대형 (PC) */

  /* Font Weights */
  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold:600;
  --weight-bold:    700;

  /* Line Heights */
  --leading-tight:  1.2;
  --leading-snug:   1.4;
  --leading-normal: 1.6;
  --leading-relaxed:1.75;
}
```

### 3-3. 텍스트 스타일 클래스 (예약)

| 클래스 | 크기 | 굵기 | 용도 |
|--------|------|------|------|
| `.t-hero` | 5xl~6xl | 700 | 히어로 섹션 메인 타이틀 |
| `.t-section` | 3xl | 600 | 섹션 제목 |
| `.t-heading` | 2xl | 600 | 카드/컴포넌트 제목 |
| `.t-body` | base | 400 | 본문 |
| `.t-caption` | xs | 400 | 캡션/태그 |
| `.t-price` | lg~xl | 700 | 가격 표시 |
| `.t-price-orig` | sm | 400 | 원가 (취소선) |

---

## 4. 스페이싱 & 레이아웃

### 4-1. 스페이싱 스케일 (4px 기반)

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32:  128px;
}
```

### 4-2. 레이아웃 컨테이너

```css
:root {
  --container-max:   1760px;   /* 풀와이드 섹션 (히어로, 배너) */
  --container-wide:  1400px;   /* 일반 콘텐츠 (상품 그리드) */
  --container-base:  1240px;   /* 좁은 콘텐츠 (텍스트, 폼) */
  --container-narrow:960px;    /* 아티클, 상세 텍스트 */
  --gutter:          16px;     /* 양쪽 여백 (모바일) */
  --gutter-pc:       40px;     /* 양쪽 여백 (PC) */
}
```

### 4-3. 브레이크포인트

| 이름 | 너비 | 용도 |
|------|------|------|
| `mobile` | ≤ 767px | 스마트폰 |
| `tablet` | 768px ~ 1023px | 태블릿 (필요시) |
| `pc` | ≥ 1024px | PC |

```css
/* PC 전용 */
@media (min-width: 1024px) { ... }

/* 모바일 전용 */
@media (max-width: 1023px) { ... }

/* 소형 모바일 */
@media (max-width: 767px) { ... }
```

### 4-4. 그리드 시스템

```
상품 그리드:
  PC    : 4열 (gap: 24px)
  태블릿: 3열 (gap: 16px)
  모바일: 2열 (gap: 12px)

상세 페이지 2-Column:
  PC    : 좌 55% / 우 42% (gap: 3%)
  모바일: 단일 컬럼 (우측 패널이 하단으로 내려옴)
```

---

## 5. 컴포넌트 스타일

### 5-1. 버튼

```css
:root {
  --btn-radius:      0px;      /* 직각 (프리미엄 미니멀) */
  --btn-radius-soft: 4px;      /* 소프트 변형 (보조 버튼) */
  --btn-radius-pill: 999px;    /* 필 형태 (태그, 칩) */
  --btn-height-sm:   36px;
  --btn-height-md:   44px;
  --btn-height-lg:   52px;
  --btn-height-xl:   60px;     /* CTA 메인 버튼 */
}
```

| 버튼 유형 | 배경 | 텍스트 | 용도 |
|---------|------|--------|------|
| Primary | `var(--color-text-primary)` = #121212 | white | 장바구니, 구매 |
| Brand | `var(--color-brand)` | white | CTA 포인트 버튼 |
| Outline | transparent + border | #121212 | 보조 액션 |
| Ghost | transparent | #5A5A5A | 텍스트 링크형 |
| Danger | `#DC2626` | white | 삭제, 취소 |

### 5-2. 상품 카드

```
┌─────────────────────┐
│  [썸네일 이미지]      │  ← 1:1 비율 고정, object-fit: cover
│  [위시리스트 ♡]       │  ← 우상단 절대위치
│  [할인배지 %]         │  ← 좌상단 절대위치
├─────────────────────┤
│  상품명              │  ← 2줄 말줄임
│  부제목 (있을 경우)    │
│  ~~원가~~   할인가    │
└─────────────────────┘

호버 효과:
  - 썸네일: scale(1.04) transition 0.4s ease
  - 카드 전체: box-shadow 깊이 증가
  - 위시리스트 아이콘: opacity 0 → 1 (PC만)
```

### 5-3. 배지/태그

| 배지 | 배경 | 텍스트 |
|------|------|--------|
| NEW | `#121212` | white |
| BEST | `#8B1A1A` | white |
| SALE | `#C0392B` | white |
| SOLD OUT | `#999999` | white |
| 추천 | `var(--color-brand)` | white |

---

## 6. 애니메이션 & 모션

### 6-1. 이징 함수

```css
:root {
  --ease-out-expo:    cubic-bezier(0.16, 1, 0.3, 1);    /* 빠른 시작, 부드러운 정지 */
  --ease-in-out-circ: cubic-bezier(0.85, 0, 0.15, 1);  /* 스크롤 기반 전환 */
  --ease-out-quart:   cubic-bezier(0.25, 1, 0.5, 1);   /* 일반 전환 */
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1); /* 스프링 (약한 바운스) */
}
```

### 6-2. 트랜지션 속도

| 이름 | 시간 | 용도 |
|------|------|------|
| `--duration-fast` | 150ms | 버튼 호버, 색상 변화 |
| `--duration-base` | 250ms | 카드 호버, 아이콘 |
| `--duration-slow` | 400ms | 패널 열기/닫기 |
| `--duration-slower`| 600ms | 페이지 전환, 히어로 요소 |
| `--duration-long`  | 1000ms+ | GSAP 스크롤 애니메이션 |

### 6-3. GSAP 활용 원칙

```
히어로 섹션 (ScrollTrigger):
  - 스크롤 50% 시점에 텍스트 페이드인 + 슬라이드업
  - 배경 비디오: parallax scrub(1) 적용
  - pin: true로 섹션 고정 후 스크롤에 따라 콘텐츠 교체

상품 리스트 진입 효과:
  - stagger: 0.08s 간격으로 카드 순차 페이드인
  - y: 30px → 0, opacity: 0 → 1

상세페이지 스티키 패널:
  - GSAP ScrollTrigger pin 또는 CSS position:sticky 우선 검토
  - CSS sticky로 충분하면 GSAP 불필요 (성능 우선)
```

### 6-4. 동영상 히어로 최적화 기준

```
포맷:  WebM (VP9) 우선, MP4 (H.264) 폴백
해상도: 1920×1080 최대 (PC), 768×1080 (모바일)
용량:  PC 버전 8MB 이하, 모바일 버전 4MB 이하
재생:  autoplay, muted, loop, playsinline
poster: 비디오 로드 전 표시할 정적 이미지 (1장)
접근성: prefers-reduced-motion 감지 → 비디오 정지, poster만 표시
```

```html
<!-- 히어로 비디오 마크업 패턴 -->
<video
  class="hero-video"
  autoplay muted loop playsinline
  poster="[poster-image.jpg]"
  preload="none">
  <source src="[hero.webm]" type="video/webm">
  <source src="[hero.mp4]"  type="video/mp4">
</video>

<script>
// 움직임 감소 설정 사용자 배려
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelector('.hero-video').pause();
}
</script>
```

---

## 7. 그림자 & 깊이감

```css
:root {
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg:  0 12px 32px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06);
  --shadow-xl:  0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06);

  /* 다크 테마용 (돈육/수산) */
  --shadow-dark-sm: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-dark-lg: 0 12px 32px rgba(0,0,0,0.5);
}
```

---

## 8. 보더 반지름

```css
:root {
  --radius-none: 0;
  --radius-sm:   4px;    /* 인풋, 선택박스 */
  --radius-md:   8px;    /* 카드 (기본) */
  --radius-lg:   12px;   /* 모달, 드롭다운 */
  --radius-xl:   16px;   /* 큰 카드 */
  --radius-full: 999px;  /* 배지, 태그, 필 버튼 */
}
```

> **프리미엄 미니멀 원칙**: 메인 레이아웃 컨테이너와 히어로 영역은 `radius: 0` 유지.
> 카드와 작은 컴포넌트에만 미세한 라운딩 적용.

---

## 9. 아이콘 시스템

- **방식**: SVG 인라인 (스프라이트) 또는 외부 CDN
- **크기**: 16px / 20px / 24px / 32px (4단계)
- **스트로크**: 1.5px (일관된 선 굵기)
- **색상**: currentColor 사용 (부모 색상 상속)
- **추천 라이브러리**: Heroicons (MIT 라이선스) — CDN 없이 SVG 직접 삽입

---

## 10. 반응형 이미지 비율

| 이미지 영역 | 비율 | 비고 |
|-----------|------|------|
| 상품 카드 썸네일 | 1:1 (100%) | object-fit: cover |
| 상품 상세 메인 이미지 | 1:1 또는 4:3 | 실제 상품 이미지 비율 |
| 히어로 비디오/이미지 | 16:9 (PC) / 9:16 (모바일) | 비디오 배경 |
| 메인 배너 | 2560:800 (PC) / 750:900 (모바일) | 권장 해상도 |
| 카테고리 이미지 | 3:4 | 세로형 비주얼 |
