(function ($) {

  $(function () {

    $('.layout-header').find('.search-icon').bind('click', function (event) {
      event.stopPropagation();
      $('.search-lightbox').addClass('animate');
    });
    
    $(document).bind('click', function(e) {
      var e = e || window.event; //浏览器兼容性 
      var elem = e.target || e.srcElement;
      while (elem) { //循环判断至跟节点，防止点击的是div子元素 
        if (elem.id && elem.id == 'gridea-search-form') {
          return;
        }
        elem = elem.parentNode;
      }
      $('.search-lightbox').removeClass('animate');
    });

    $('.layout-header').find('.trigger').bind('click', function (event) {
      event.stopPropagation();
      $('.layout-collapse').toggleClass('open');
    });

    $(".layout-comments").find('textarea#veditor').focus(function () {
      $(this).siblings('div.vctrl').addClass("d-block");
      $(this).parent().siblings('div.vcontrol').addClass("d-block");
    })

    $(".layout-comments").on('click', 'span.vat', function () {
      $(this).parent('div.vmeta').next("div.vcontent").after($("div.vwrap"));
      $('textarea#veditor').focus();
    })

  });

  $(function () {

    let mainNavLinks = document.querySelectorAll(".markdownIt-TOC a");

    window.addEventListener("scroll", event => {
      let fromTop = window.scrollY;

      mainNavLinks.forEach((link, index) => {
        let section = document.getElementById(decodeURI(link.hash).substring(1));
        let nextSection = null
        if (mainNavLinks[index + 1]) {
          nextSection = document.getElementById(decodeURI(mainNavLinks[index + 1].hash).substring(1));
        }
        if (section.offsetTop <= fromTop) {
          if (nextSection) {
            if (nextSection.offsetTop > fromTop) {
              link.classList.add("current");
            } else {
              link.classList.remove("current");
            }
          } else {
            link.classList.add("current");
          }
        } else {
          link.classList.remove("current");
        }
      });
    });
  });


  $(window).scroll(function () {

    var scroH = $(window).scrollTop();

    if (scroH > 84) {
      $(".markdownIt-TOC").addClass("fixed-top");
      $(".layout-totop").addClass("d-md-block");
    } else {
      $(".markdownIt-TOC").removeClass("fixed-top");
      $(".layout-totop").removeClass("d-md-block");
    }

  });

  $('.layout-totop').bind('click', function () {
    $("html,body").animate({
        scrollTop: 0
      },
      800);
  });

})(jQuery);