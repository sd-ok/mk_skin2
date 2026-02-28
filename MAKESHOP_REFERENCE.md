# MAKESHOP REFERENCE — 메이크샵 가상태그 레퍼런스

> 마지막 업데이트: 2026-02-28
> 출처: 메이크샵 공식 매뉴얼 + skin_src 파일 분석
> ⚠️ 불확실한 태그는 반드시 실제 메이크샵 환경에서 테스트 후 사용할 것

---

## 1. 가상태그 기본 문법

```html
<!-- ECHO: 값 출력 -->
<!--/태그명/-->

<!-- INCLUDE: 공통 영역 불러오기 -->
<!--/include_header(1)/-->

<!-- IF 조건문 -->
<!--/if_태그명/-->
  조건이 참일 때 출력
<!--/else/-->
  조건이 거짓일 때 출력
<!--/end_if/-->

<!-- LOOP 반복문 -->
<!--/loop_태그명(개수)/-->
  반복 내용
<!--/end_loop/-->

<!-- IF + LOOP 복합 (데이터 존재 여부 확인 후 루프) -->
<!--/if_상품태그/-->
<!--/loop_상품태그(12)/-->
  ... <!--/상품태그@속성/-->
<!--/end_loop/-->
<!--/end_if/-->

<!-- 숫자 포맷 (천 단위 쉼표) -->
<!--/number/태그명/-->
```

---

## 2. 공통 INCLUDE 태그

```html
<!--/include_header(1)/-->    ← 상단 include (모든 중앙 페이지에 필수)
<!--/include_footer(1)/-->    ← 하단 include
<!--/include_menu(1)/-->      ← 사이드/상단 메뉴 include (페이지별 선택)
```

---

## 3. 쇼핑몰 공통 정보 태그

```html
<!-- 쇼핑몰 기본 정보 -->
<!--/shop_name/-->            ← 쇼핑몰명
<!--/shop_tel/-->             ← 대표 전화번호
<!--/shop_fax/-->             ← 팩스번호
<!--/shop_email/-->           ← 이메일
<!--/shop_addr/-->            ← 주소 (구 방식, 필요시 확인)

<!-- 사업자 정보 -->
<!--/company_owner/-->        ← 대표자명
<!--/company_addr/-->         ← 사업장 주소
<!--/company_number/-->       ← 사업자등록번호
<!--/online_sale_number/-->   ← 통신판매업신고번호
<!--/privacy_charge/-->       ← 개인정보보호책임자
<!--/link_company_number/-->  ← 사업자정보확인 링크

<!-- 고객센터 운영 시간 -->
<!--/loop_shop_cs/-->
  <!--/shop_cs@value/-->      ← 고객센터 운영 시간 각 항목
<!--/end_loop/-->

<!-- 에스크로 로고 -->
<!--/img_logo_escrow/-->

<!-- 법적 링크 -->
<!--/link_join_terms/-->      ← 이용약관
<!--/link_privacy/-->         ← 개인정보처리방침
<!--/link_useinfo/-->         ← 이용안내

<!-- 바로톡 (메이크샵 고객 채팅) -->
<!--/if_link_new_barotalk/-->
  <a href="<!--/link_new_barotalk/-->">바로톡</a>
<!--/end_if/-->
```

---

## 4. 회원/로그인 관련 태그

```html
<!-- 로그인 상태 분기 -->
<!--/if_login/-->
  로그인 상태일 때
<!--/else/-->
  비로그인 상태일 때
<!--/end_if/-->

<!-- 회원 정보 -->
<!--/member_name/-->          ← 회원 이름
<!--/member_id/-->            ← 회원 아이디
<!--/member_grade_name/-->    ← 회원 등급명

<!-- 주요 링크 -->
<!--/link_login/-->           ← 로그인 페이지
<!--/link_logout/-->          ← 로그아웃
<!--/link_join/-->            ← 회원가입
<!--/link_mypage/-->          ← 마이페이지
<!--/link_mypage_order/-->    ← 주문 내역
<!--/link_wish/-->            ← 위시리스트
<!--/link_cart/-->            ← 장바구니

<!-- 장바구니 개수 -->
<!--/cart_count/-->           ← 장바구니 상품 수
<!--/wish_count/-->           ← 위시리스트 수 (있을 경우)
```

---

## 5. 카테고리 관련 태그

### 5-1. 메인 GNB 카테고리

```html
<!-- 1단계 카테고리 목록 -->
<!--/if_category1/-->
<!--/loop_category1/-->
  <a href="<!--/category1@link/-->"><!--/category1@name/--></a>
<!--/end_loop/-->
<!--/end_if/-->

<!-- 2단계 하위 카테고리 (category1 루프 내부) -->
<!--/loop_category1@sub/-->
  <a href="<!--/category1@sub@link/-->"><!--/category1@sub@name/--></a>
<!--/end_loop/-->
```

### 5-2. 상품분류 페이지 카테고리

```html
<!-- 현재 카테고리명 -->
<!--/now_cate_name/-->

<!-- 현재 위치 (브레드크럼) -->
<!--/if_cate1_name/--> <a href="<!--/link_cate1/-->"><!--/cate1_name/--></a> <!--/end_if/-->
<!--/if_cate2_name/--> <a href="<!--/link_cate2/-->"><!--/cate2_name/--></a> <!--/end_if/-->
<!--/if_cate3_name/--> <a href="<!--/link_cate3/-->"><!--/cate3_name/--></a> <!--/end_if/-->

<!-- 하위 카테고리 탭 (현재 카테고리의 하위) -->
<!--/if_category/-->
<!--/loop_category/-->
  <!--/if_upper_category_set/-->
    <!--/if_category@is_pc_display/-->
    <a href="<!--/category@link/-->"><!--/category@name/--></a>
    <!--/end_if/-->
  <!--/else/-->
    <a href="<!--/category@link/-->"><!--/category@name/--></a>
  <!--/end_if/-->
<!--/end_loop/-->
<!--/end_if/-->

<!-- 동일 레벨 카테고리 (형제 카테고리) -->
<!--/if_same_level_category/-->
<!--/loop_same_level_category/-->
  <a href="<!--/same_level_category@link/-->"
     class="<!--/if_same_level_category@is_sel/-->active<!--/end_if/-->">
    <!--/same_level_category@name/-->
  </a>
<!--/end_loop/-->
<!--/end_if/-->

<!-- 상위 카테고리 이미지 -->
<!--/if_category@upper_img_use/-->
  <img src="<!--/category@upper_img/-->" alt="<!--/category@upper_category_name/-->">
<!--/else/-->
  <!--/category@upper_category_name/-->
<!--/end_if/-->
```

---

## 6. 상품 목록 관련 태그

### 6-1. 일반 상품 목록

```html
<!-- 상품 목록 (12개 표시) -->
<!--/block_product/-->
<!--/if_product_list/-->
<!--/loop_product_list(12)/-->
<dl class="item-list">
  <dt class="thumb">
    <a href="<!--/product_list@link/-->">
      <img src="<!--/product_list@image_m/-->" alt="<!--/product_list@name/-->">
    </a>

    <!-- 위시리스트 버튼 -->
    <!--/if_product_list@link_wish_toggle/-->
    <a href="<!--/product_list@link_wish_toggle/-->" class="btn-wish">
      <!--/product_list@block_btn_wish/-->
        <img src="[wish_off.png]" class="off">
        <img src="[wish_on.png]"  class="on">
      <!--/end_block/-->
    </a>
    <!--/end_if/-->
  </dt>
  <dd class="prd-info">
    <!-- 상품명 -->
    <a href="<!--/product_list@link/-->"><!--/product_list@name/--></a>

    <!-- 부제목 -->
    <!--/if_product_list@subname/-->
    <p class="subname"><!--/product_list@subname/--></p>
    <!--/end_if/-->

    <!-- 가격 (조건 분기) -->
    <!--/if_product_list@price_replace/-->
      <span class="replace"><!--/product_list@price_replace/--></span>
    <!--/else_if_product_list@is_soldout/-->
      <span class="soldout">Sold Out</span>
    <!--/else/-->
      <!--/if_product_list@price_discount/-->
        <span class="price-sale"><!--/number/product_list@price_discount/--></span>
        <s><!--/number/product_list@price_sell/--></s>
      <!--/else/-->
        <span class="price"><!--/number/product_list@price_sell/--></span>
        <!--/if_product_list@price_consumer(+1)/-->
        <s><!--/number/product_list@price_consumer/--></s>
        <!--/end_if/-->
      <!--/end_if/-->
      <!-- 할인율 -->
      <!--/if_product_list@discount_percent/-->
      <span class="discount"><!--/product_list@discount_percent/-->%</span>
      <!--/end_if/-->
    <!--/end_if/-->

    <!-- 아이콘 (NEW, BEST 등) -->
    <!--/product_list@icons/-->
    <!--/product_list@subs_icon/-->
    <!--/product_list@promotion_icon/-->
  </dd>
</dl>
<!--/end_loop/-->
<!--/end_if/-->
<!--/end_block/-->

<!-- 더보기 버튼 -->
<!--/block_product_more/-->
<a href="<!--/link_more_product_list/-->">더보기</a>
<!--/end_block/-->
```

### 6-2. 베스트 상품

```html
<!--/if_best_product/-->
<!--/loop_best_product(20)/-->
  <a href="<!--/best_product@link/-->">
    <!--/makeshop{label_product_img(best_product,image_m)}/-->
    <!--/best_product@name/-->
    <!--/number/best_product@price_sell/-->
    <!--/if_best_product@price_discount/-->
      <!--/number/best_product@price_discount/-->
    <!--/end_if/-->
  </a>
<!--/end_loop/-->
<!--/end_if/-->
```

### 6-3. 추천 상품

```html
<!--/if_recmd_product/-->
<!--/loop_recmd_product(20)/-->
  <a href="<!--/recmd_product@link/-->">
    <!--/recmd_product@name/-->
    <!--/number/recmd_product@price_sell/-->
  </a>
<!--/end_loop/-->
<!--/end_if/-->
```

### 6-4. 신상품

```html
<!--/if_new_product/-->
<!--/loop_new_product(8)/-->
  <a href="<!--/new_product@link/-->">
    <img src="<!--/new_product@image_m/-->" alt="<!--/new_product@name/-->">
    <!--/new_product@name/-->
    <!--/number/new_product@price_sell/-->
  </a>
<!--/end_loop/-->
<!--/end_if/-->
```

### 6-5. 총 상품 수 / 정렬

```html
<!-- 총 상품 수 -->
총 <strong><!--/total_product_count/--></strong>개의 상품

<!-- 정렬 (JavaScript로 sendsort 함수 호출) -->
<!--/if_now_sort_type(order)/-->최신순
<!--/else_if_now_sort_type(sellcnt)/-->인기순
<!--/else_if_now_sort_type(price)/-->낮은가격순
<!--/else_if_now_sort_type(price2)/-->높은가격순
<!--/else/-->상품정렬
<!--/end_if/-->

<a href="javascript:sendsort('order')">최신순</a>
<a href="javascript:sendsort('sellcnt')">인기순</a>
<a href="javascript:sendsort('price')">낮은가격순</a>
<a href="javascript:sendsort('price2')">높은가격순</a>
```

---

## 7. 상품 상세 페이지 관련 태그

```html
<!-- 상품 기본 정보 -->
<!--/goods_name/-->           ← 상품명
<!--/goods_subname/-->        ← 부제목 (있을 경우)
<!--/goods_engname/-->        ← 영문명

<!-- 가격 -->
<!--/sell_price/-->           ← 판매가
<!--/consumer_price/-->       ← 소비자가
<!--/dc_price/-->             ← 할인가
<!--/number/sell_price/-->    ← 판매가 (천 단위 쉼표)

<!-- 상품 이미지 -->
<!--/goods_image/-->          ← 대표 이미지 (큰)
<!--/goods_image_m/-->        ← 대표 이미지 (중간)
<!--/goods_image_s/-->        ← 대표 이미지 (작은)

<!-- 옵션 선택 -->
<!--/option_list/-->          ← 옵션 선택 UI 자동 출력

<!-- 장바구니 / 구매 버튼 -->
<!--/cart_btn/-->             ← 장바구니 담기 버튼
<!--/order_btn/-->            ← 바로 구매 버튼
<!--/wish_btn/-->             ← 위시리스트 버튼

<!-- 상품 설명 -->
<!--/goods_desc/-->           ← 상품 상세 설명 영역

<!-- 배송비 -->
<!--/delivery_fee/-->         ← 배송비 정보

<!-- 재고/품절 -->
<!--/if_soldout/-->
  <span>품절</span>
<!--/end_if/-->

<!-- 관련 상품 / 추가 상품 -->
<!--/if_related_goods/-->
<!--/loop_related_goods/-->
  <a href="<!--/related_goods@link/-->"><!--/related_goods@name/--></a>
<!--/end_loop/-->
<!--/end_if/-->
```

---

## 8. 메인 페이지 관련 태그

```html
<!-- 메인 배너 (쇼핑몰 관리 > 배너관리에서 등록) -->
<!--/main_banner/-->          ← 메인 배너 자동 출력
<!--/if_main_banner/-->       ← 배너 존재 여부 확인

<!-- 팝업 -->
<!--/popup_script/-->         ← 팝업 스크립트 (head 또는 body에 위치)

<!-- 오늘 본 상품 -->
<a href="/shop/todaygoods.html">오늘 본 상품</a>
```

---

## 9. 스크롤 관련 (script_scroll)

```html
<!-- 스크롤 이벤트 사용 시 페이지 최상단에 삽입 -->
<!--/script_scroll(1)/-->
```

---

## 10. 이미지 관련 헬퍼 태그

```html
<!-- 상품 이미지 (라벨 자동 적용) -->
<!--/makeshop{label_product_img(best_product,image_m)}/-->

<!-- 인자:
  첫 번째: 상품 변수명 (best_product, recmd_product, product_list 등)
  두 번째: 이미지 크기 (image_l=대, image_m=중, image_s=소)
-->
```

---

## 11. 자주 쓰는 조건 패턴

```html
<!-- 로그인 여부에 따른 메뉴 분기 -->
<!--/if_login/-->
  <a href="<!--/link_logout/-->">로그아웃</a>
  <a href="<!--/link_mypage/-->">마이페이지</a>
<!--/else/-->
  <a href="<!--/link_login/-->">로그인</a>
  <a href="<!--/link_join/-->">회원가입</a>
<!--/end_if/-->

<!-- 카테고리 이미지 존재 여부 -->
<!--/if_category@upper_img_use/-->
  <img src="<!--/category@upper_img/-->">
<!--/else/-->
  <span><!--/category@upper_category_name/--></span>
<!--/end_if/-->

<!-- 가격 대체 텍스트 (가격 대신 "전화문의" 등) -->
<!--/if_product_list@price_replace/-->
  <span><!--/product_list@price_replace/--></span>
<!--/else_if_product_list@is_soldout/-->
  <span class="soldout">품절</span>
<!--/else/-->
  ... 일반 가격 출력 ...
<!--/end_if/-->
```

---

## 12. 메이크샵 이미지 CDN 경로

```
스킨 이미지 (메이크샵 CDN 업로드 후 사용):
  //skin.makeshop.co.kr/skin/[스킨폴더명]/[파일명]

상품 이미지 (자동 관리):
  //image.makeshop.co.kr/makeshop/...

⚠️ 로컬 상대경로는 메이크샵 환경에서 동작하지 않음
⚠️ 스킨 이미지는 반드시 메이크샵 스킨 이미지 업로드 기능 사용
```

---

## 13. 메이크샵 환경 설정 (META 영역)

```html
<!-- 환경설정 > META 영역에 삽입할 내용 -->

<!-- 뷰포트 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Pretendard 폰트 -->
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="stylesheet" as="style" crossorigin
  href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

<!-- GSAP (ScrollTrigger 포함) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

<!-- Swiper.js -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>

<!-- Tailwind CSS (CDN Play 모드 — 충돌 없을 경우) -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->
<!-- ⚠️ Tailwind는 충돌 여부 확인 후 활성화 -->
```

---

## 14. 알 수 없는 / 검증 필요 태그 목록

아래 태그는 메이크샵 버전/환경에 따라 동작이 다를 수 있음.
**실제 테스트 후 사용 여부 결정 필요.**

| 태그 | 상태 | 비고 |
|------|------|------|
| `<!--/popup_script/-->` | ⚠️ 미검증 | 팝업 기능 활성화 여부에 따라 다름 |
| `<!--/wish_count/-->` | ⚠️ 미검증 | 위시리스트 개수 (존재 여부 확인 필요) |
| `<!--/main_banner/-->` | ⚠️ 미검증 | 배너 관리 방식에 따라 구조 다름 |
| `<!--/delivery_fee/-->` | ⚠️ 미검증 | 배송비 표시 구조 확인 필요 |
| `<!--/related_goods@link/-->` | ⚠️ 미검증 | 관련 상품 설정 필요 |

**원칙: 검증 전 태그는 실제 메이크샵 어드민에서 적용 테스트 필수**
