/* =============================================================
   MK_SKIN2 — Header JavaScript
   [Makeshop 입력 안내] 상단 JS탭에 붙여넣기.
   jQuery는 메이크샵이 기본 제공 (별도 로드 불필요).
   GSAP, Swiper는 META영역 CDN으로 로드 완료 가정.
   ============================================================= */

jQuery(document).ready(function ($) {

  /* ============================================================
     TOP BANNER — dismiss & localStorage
     ============================================================ */
  (function initBanner() {
    var BANNER_KEY  = 'mk2_banner_closed';
    var BANNER_DATE = 'mk2_banner_date';
    var today       = new Date().toDateString();

    // 오늘 닫은 기록 있으면 즉시 숨김
    if (localStorage.getItem(BANNER_KEY) === '1' &&
        localStorage.getItem(BANNER_DATE) === today) {
      hideBanner(false);
      return;
    }

    // 닫기 버튼
    $('#btnBannerClose').on('click', function () {
      localStorage.setItem(BANNER_KEY,  '1');
      localStorage.setItem(BANNER_DATE, today);
      hideBanner(true);
    });

    function hideBanner(animate) {
      if (animate) {
        $('#topBnr').slideUp(200, function () {
          $('#wrap').addClass('no-topbanner');
        });
      } else {
        $('#topBnr').hide();
        $('#wrap').addClass('no-topbanner');
      }
    }
  })();

  /* ============================================================
     MOBILE DRAWER MENU
     ============================================================ */
  var $drawer = $('#mobileDrawer');
  var $mask   = $('#mask');

  function openDrawer() {
    $drawer.addClass('is-open');
    $mask.addClass('is-active');
    $('body').css('overflow', 'hidden');
  }

  function closeDrawer() {
    $drawer.removeClass('is-open');
    $mask.removeClass('is-active');
    $('body').css('overflow', '');
  }

  $('#btnMenu').on('click', openDrawer);
  $('#btnMenuClose').on('click', closeDrawer);
  $mask.on('click', closeDrawer);

  // 서브카테고리 아코디언
  $(document).on('click', '.drawer-link.has-sub', function (e) {
    e.preventDefault();
    var $item = $(this).closest('.drawer-item');
    var $sub  = $item.find('.drawer-sub');
    $item.toggleClass('is-open');
    $sub.stop(true).slideToggle(200);
  });

  /* ============================================================
     SEARCH PANEL
     ============================================================ */
  var $searchPanel = $('#searchPanel');

  $('#btnSearch').on('click', function () {
    $searchPanel.addClass('is-open');
    setTimeout(function () {
      $searchPanel.find('.search-panel__input').trigger('focus');
    }, 300);
  });

  $('#btnSearchClose').on('click', function () {
    $searchPanel.removeClass('is-open');
  });

  // Escape 키로 닫기
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $searchPanel.removeClass('is-open');
      closeDrawer();
    }
  });

  /* ============================================================
     SCROLL BEHAVIOR
     - 스크롤 다운: 헤더 숨김 (200px 이후부터)
     - 스크롤 업  : 헤더 표시
     - 메인 페이지 한정: 투명 → 불투명 전환 (50px 기준)
     ============================================================ */
  var $headBox   = $('#head_box');
  var $wrap      = $('#wrap');
  var isMainPage = $wrap.hasClass('main-page');
  var lastScroll = 0;
  var ticking    = false;
  var HIDE_THRESHOLD = 200;

  function onScroll() {
    var scrollY = window.pageYOffset;

    // 메인 페이지: 투명 → 흰색 전환
    if (isMainPage) {
      if (scrollY > 50) {
        $headBox.addClass('is-scrolled');
      } else {
        $headBox.removeClass('is-scrolled');
      }
    }

    // 스크롤 방향 감지 (200px 이하에서는 항상 표시)
    if (scrollY < HIDE_THRESHOLD) {
      $headBox.removeClass('is-hidden');
    } else if (scrollY > lastScroll + 4) {
      // 스크롤 다운 (오차 4px)
      $headBox.addClass('is-hidden');
      $searchPanel.removeClass('is-open'); // 검색창도 닫기
    } else if (scrollY < lastScroll - 4) {
      // 스크롤 업
      $headBox.removeClass('is-hidden');
    }

    lastScroll = scrollY;
    ticking    = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ============================================================
     GNB PC — 키보드 접근성 (focus-within 보완)
     CSS hover로 기본 동작하지만, 키보드 Tab 이동 시 보완.
     ============================================================ */
  $('.gnb-item').each(function () {
    var $item     = $(this);
    var $dropdown = $item.find('.gnb-dropdown');
    if (!$dropdown.length) return;

    $item.on('focusin', function () {
      $dropdown.stop(true).fadeIn(150);
    }).on('focusout', function () {
      // 포커스가 item 밖으로 나갔을 때만 닫기
      setTimeout(function () {
        if (!$item.find(':focus').length) {
          $dropdown.stop(true).fadeOut(150);
        }
      }, 100);
    });
  });

  /* ============================================================
     장바구니 개수 — 0이면 배지 숨김
     ============================================================ */
  var $cartBadge = $('.cart-badge');
  if ($cartBadge.length) {
    var count = parseInt($cartBadge.text().trim(), 10);
    if (!count || count <= 0) {
      $cartBadge.attr('data-zero', 'true');
    }
  }

});
