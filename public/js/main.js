$(document).ready(function(){

    $('.header__lang li').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    $('.main__map-box svg path').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.header__menu > li').mouseenter(function(){
        $(this).find('.submenu').show()
    });

    $('.header__menu  >li').mouseleave(function(){
        $(this).find('.submenu').hide()
    });
    $('.submenu > li').mouseenter(function(){
        $(this).find('.sub').show()
    });

    $('.submenu  >li').mouseleave(function(){
        $(this).find('.sub').hide()
    });
    $('.sub > li').mouseenter(function(){
        $(this).find('ul').show()
    });

    $('.sub > li').mouseleave(function(){
        $(this).find('ul').hide()
    });

    $('.news__filter li').on('click', function(){
        $(this).addClass('active'   ).siblings().removeClass('active')
    });

    $('.sidebar__video video').on('click',function(){
            this.pause();
            $(this).removeAttr('controls');
            $(this).siblings().fadeIn();
    });

    $('.sidebar__video img').on('click',function(){
       $(this).siblings('.linear,.sidebar__video-title').fadeOut();
       $(this).fadeOut();
       document.querySelector('#svideo').play();
       $('#svideo').attr("controls","true");
    });

    $('.faq__item').on('click',function(){

        $(this).siblings().removeClass('active').find('.faq__content').slideUp();
        $(this).siblings().find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');

        $(this).find('.faq__content').slideDown();
        $(this).find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
         $(this).addClass('active')
    });

    $('.anticorruption__item').on('click',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.anticorruption__content').removeClass('show');
        $('.anticorruption__content').eq($(this).index()).addClass('show');
    });
});