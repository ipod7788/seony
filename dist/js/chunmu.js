$(function () {


  let isOpen = false;
  $("#menu-toggle").click(function () {
    if (!isOpen) {
      $(".navbar").fadeIn(300);
      isOpen = true;
    } else {
      $(".navbar").fadeOut(300);
      isOpen = false;
    }
  });

  $(".backtotop").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
  })

  // 點選選單項目也收起（可選）
  $(".navbar a").click(function (e) {
    e.preventDefault();
    let target = $($(this).attr("href")); // 取得錨點對應區塊
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top-85
      }, 500); // 平滑滾動到錨點
    }
    if ($(window).width() <= 768) {
      $(".navbar").fadeOut(300);
      isOpen = false;
    }
  });

  const sections = $("section[id]");
  const navLinks = $(".navbar a");
  const header = $("header");
  const bannerHeight = $(".banner").outerHeight();
  console.log("bannerHeight:"+bannerHeight);

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > bannerHeight) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
    $(window).trigger("scroll");

    let scrollPos = $(window).scrollTop();

    sections.each(function () {
      const top = $(this).offset().top - 100; // 可調整 offset
      const bottom = top + $(this).outerHeight();
      const id = $(this).attr("id");

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.removeClass("on");
        $(`.navbar a[href="#${id}"]`).addClass("on");
      }
    });
  });
  $(window).trigger("scroll");

})
