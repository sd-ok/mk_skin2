# MK_SKIN2 — 메이크샵 프리미엄 반응형 스킨 프로젝트 브리프

> 마지막 업데이트: 2026-02-28
> 개발 시작 전 분석/정리 문서. 모든 개발은 사용자 승인 후 진행.

---

## 1. 프로젝트 목적

메이크샵(makeshop.co.kr)용 **반응형 프리미엄 스킨**을 신규 제작한다.
누구나 메이크샵에 바로 적용 가능한 **완성형 범용 스킨**이 목표.
전환율(CVR), 고객경험(CX), 운영 효율 최우선.

---

## 2. 현재 참고 스킨 분석 ("Fortnight" 테마)

| 항목 | 현재 값 |
|------|---------|
| Point Color | `#5F4541` (웜 브라운/테라코타) |
| Background | `#F6F4F3` (웜 오프화이트) |
| Footer BG | `#232323` |
| Font | Pretendard Variable |
| Max Width | 1760px |
| Breakpoint | 1024px (PC ↔ 모바일) |
| Libraries | jQuery, Swiper.js, GSAP |

### 파일별 구성 파악

| 파일명(skin_src/) | 탭 구성 | 주요 내용 |
|---|---|---|
| 상단하단디자인_상단-기본상단 페이지.html | CSS + JS + 디자인 | Fixed header, 상단배너, GNB(메가메뉴), 검색, 회원/장바구니 아이콘 |
| 상단하단디자인_하단-기본하단 페이지.html | CSS + JS + 디자인 | 다크 footer, PC/모바일 분기, SNS, 사업자 아코디언(모바일) |
| 중앙디자인_메인-메인 페이지.html | CSS + JS + 디자인 | 풀화면 메인비주얼(Swiper), 배너섹션, Best/New/추천상품 그리드, GSAP 스크롤 |
| 중앙디자인_상품관련-상품분류페이지 | CSS + JS + 디자인 | 카테고리 탭, Best/추천 슬라이더, 4컬럼 상품 그리드, 정렬 드롭다운 |
| 중앙디자인_상품관련-상품상세페이지 | CSS + JS + 디자인 | 상품이미지+옵션+가격, `cw-` CSS변수 활용, 현재 단일컬럼 |
| 중앙디자인_주문관련_장바구니담기-통합장바구니2 | CSS + JS + 디자인 | 탭형 장바구니, 상품리스트, 결제금액 요약 |
| 중앙디자인_카테고리-카테고리 페이지.html | CSS + HTML | 매우 단순한 카테고리 nav 리스트 (대폭 개선 필요) |

### 메이크샵 파일 구조 규칙 (중요)
```
실제 메이크샵 디자인편집 화면에서는 각 페이지마다:
  ├── CSS 탭  → <style> 블록 내용만
  ├── JS 탭   → <script> 블록 내용만
  └── 디자인편집 탭 → HTML 마크업만
로 분리하여 입력해야 함.
```

---

## 3. 신규 스킨 디자인 요구사항

### 3-1. 전체 디자인 방향
- **20년차 시니어 디자이너** 수준의 결과물 (AI 생성 느낌 금지)
- **고급스럽고 프리미엄한** 명품 쇼핑몰 분위기
- 2026년 최신 트렌드 반영

### 3-2. 컬러 시스템 (카테고리별 테마)

| 카테고리 | 배경 계열 | 컨셉 |
|---------|---------|------|
| 돈육 (Pork) | 블랙 계열 | 고급 정육, 강인함 |
| 수산 (Seafood) | 다크 블루 계열 | 신선한 바다, 신뢰감 |
| 공통 Base | 결정 필요 | 프리미엄 뉴트럴 |

### 3-3. 페이지별 핵심 요구사항

#### 메인 페이지
- **인터렉티브 히어로 섹션** — Scrollytelling / Sticky Scroll Animation
- GSAP (GreenSock) 사용, 스크롤 속도에 맞춘 부드러운 가속/감속
- 시원시원한 풀화면 히어로 + 심플하고 고급스러운 레이아웃
- 참고: Shopify Winter 2026 에디션 디자인 수준

#### 상품 상세 페이지 ⭐ 필수 조건
- **PC: 좌우 2-Column 레이아웃**
  - 좌측: 상품 이미지 갤러리 (스크롤)
  - 우측: 가격 + 혜택 + 옵션선택 + CTA 버튼 → **Sticky 고정** (따라다님)
- 모바일: 단일 컬럼 풀화면 레이아웃으로 자동 전환

#### 상품 분류 페이지
- 카테고리 필터 탭 개선
- 상품 그리드: PC 4열 / 모바일 2열 유지
- 정렬 드롭다운 고도화

#### 카테고리 페이지
- 현재 매우 단순 → 비주얼 카테고리 그리드로 개선 필요

#### 장바구니
- 현재 기본 구조 유지 + 디자인 통일

---

## 4. 기술 스택 (확정)

| 구분 | 기술 |
|------|-----|
| CSS Framework | Tailwind CSS (CDN) 또는 순수 CSS (결정 필요) |
| Animation | **GSAP** (ScrollTrigger 포함) |
| Slider | **Swiper.js** (기존 유지) |
| Font | **Pretendard Variable** (기존 유지) |
| JS | jQuery (메이크샵 기본 제공) |
| 디자인 참고 | Bootstrap 5, shadcn/ui 패턴 |

> ⚠️ Framer Motion은 React 전용이므로 메이크샵 환경에서 사용 불가. GSAP으로 통일.

---

## 5. 메이크샵 가상태그 핵심 목록 (사용 예정)

```html
<!-- 공통 -->
<!--/include_header(1)/--> <!--/include_footer(1)/-->
<!--/include_menu(1)/-->

<!-- 상품 루프 -->
<!--/loop_product_list(12)/--> ... <!--/end_loop/-->
<!--/loop_best_product(20)/--> ... <!--/end_loop/-->
<!--/product_list@name/--> <!--/product_list@link/-->
<!--/number/product_list@price_sell/-->
<!--/product_list@image_m/-->
<!--/if_product_list@price_discount/--> ... <!--/end_if/-->

<!-- 카테고리 -->
<!--/loop_category/--> <!--/category@name/--> <!--/category@link/-->
<!--/now_cate_name/-->

<!-- 상세 -->
<!--/goods_name/--> <!--/sell_price/--> <!--/option_list/-->

<!-- 회사정보 -->
<!--/company_owner/--> <!--/company_addr/--> <!--/shop_tel/-->
<!--/link_join_terms/--> <!--/link_privacy/-->
```

---

## 6. 환경설정 / META 영역 입력 사항

메이크샵 스킨관리 > 환경설정 > META 영역에 입력 필요:

```html
<!-- Pretendard 폰트 -->
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />

<!-- GSAP (ScrollTrigger 포함) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Swiper.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- 기본 viewport meta -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 7. 개발 순서 (Plan — 승인 후 시작)

```
Phase 1: 스타일 가이드 & 공통 CSS 변수 시스템
  ├── 컬러 팔레트 확정 (블랙/다크블루/뉴트럴)
  ├── 타이포그래피 스케일
  └── 공통 컴포넌트 (버튼, 태그, 카드)

Phase 2: 상단(Header) + 하단(Footer)
  ├── 반응형 GNB (드로어 메뉴 - 모바일)
  ├── 로고, 검색바, 장바구니 아이콘
  └── Footer 비즈니스 정보

Phase 3: 메인 페이지
  ├── 풀화면 히어로 + GSAP Scrollytelling
  ├── 상품 섹션 (Best / New / 추천)
  └── 브랜드 스토리 섹션

Phase 4: 상품 분류 페이지
  ├── 카테고리 필터 탭
  ├── 상품 그리드 (4열/2열)
  └── 정렬 드롭다운

Phase 5: 상품 상세 페이지 ⭐
  ├── 2-Column Sticky 레이아웃
  ├── 이미지 갤러리 (썸네일 + 메인뷰)
  ├── 옵션/수량 선택
  └── CTA 버튼 (장바구니/바로구매)

Phase 6: 장바구니 & 카테고리
  ├── 카테고리 비주얼 그리드
  └── 장바구니 디자인 통일

Phase 7: 검증 & 최종화
  ├── 가상태그 전체 검증
  ├── 반응형 크로스브라우저 테스트
  └── 성능 최적화
```

---

## 8. 유의사항 & 원칙

1. **할루시네이션 금지** — 불확실한 메이크샵 태그는 반드시 공식 매뉴얼 확인 후 사용
2. **모듈화 개발** — 하나의 거대한 파일 금지, 컨텍스트 분산
3. **사용자 승인 필수** — 매 Phase 시작 전 Plan 요약 후 승인받기
4. **MD 파일 지속 업데이트** — 변경 코드 스니펫, 수정 파일 경로, 트레이드오프 기록
5. **Tailwind vs 순수CSS** — 메이크샵 환경에서 Tailwind CDN 사용 가능하나, 커스텀 빌드 불가 (CDN Play mode만 가능). 순수 CSS가 더 안전할 수 있음 → 결정 필요

---

## 9. 확정 사항 (2026-02-28 사용자 결정)

- [x] **CSS 방법론**: Tailwind CSS CDN 1순위 → 메이크샵 충돌 시 순수 CSS로 전환
- [x] **컬러 시스템**: 돈육=블랙/다크레드, 수산=다크블루, 공통 베이스 컬러 적용
- [x] **히어로 섹션**: 최적화된 동영상 배경 1순위 (용량/성능 무리 없는 수준)
- [x] **로고**: 이미지 로고 영역 (placeholder 처리)

## 상세 계획 문서

- [STYLE_GUIDE.md](STYLE_GUIDE.md) — 컬러, 타이포, 스페이싱, 애니메이션 원칙
- [DEV_RULES.md](DEV_RULES.md) — 코딩 룰, 메이크샵 제약, 파일 구조
- [MAKESHOP_REFERENCE.md](MAKESHOP_REFERENCE.md) — 가상태그 레퍼런스
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) — 단계별 개발 계획 + 수락 기준

---

## 참고 링크

- 메이크샵 매뉴얼: https://help.makeshop.co.kr
- 디자인 편집: https://help.makeshop.co.kr/manual/undefined-1/undefined-2
- 가상태그: https://help.makeshop.co.kr/manual/undefined-1/undefined-3
- Shopify Winter 2026: https://www.shopify.com/editions/winter2026
