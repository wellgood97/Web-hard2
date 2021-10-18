$(document).ready(function(){
    /* scroll even fin */
    $('.headline').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();
            if(!$('html').is(":animated")){
                if(e.originalEvent.wheelDelta > 0 && $(this).prev().offset() != undefined){
                    // 마우스 휠을 위로
                    $('html').stop().animate({
                        scrollTop:$(this).prev().offset().top
                    },1500)
                }else if(e.originalEvent.wheelDelta < 0 && $(this).next().offset() != undefined){
                    // 마우스 휠을 아래로
                    $('html').stop().animate({
                        scrollTop:$(this).next().offset().top
                    },1500,'linear')
                }
            }
        })
    })
    $('.info').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();
            if(!$('html').is(":animated")){
                if(e.originalEvent.wheelDelta > 0 && $(this).prev().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).prev().offset().top
                    },1500)
                }else if(e.originalEvent.wheelDelta < 0 && $(this).next().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).next().offset().top
                    },1500,'linear')
                }
            }
        })
    })
    $('.skill').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();
            if(!$('html').is(":animated")){
                if(e.originalEvent.wheelDelta > 0 && $(this).prev().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).prev().offset().top
                    },1500)
                }else if(e.originalEvent.wheelDelta < 0 && $(this).next().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).next().offset().top
                    },1500,'linear')
                }
            }
        })
    })
    $('.pjc').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();
            if(!$('html').is(":animated")){
                if(e.originalEvent.wheelDelta > 0 && $(this).prev().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).prev().offset().top
                    },1500)
                }else if(e.originalEvent.wheelDelta < 0 && $(this).next().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).next().offset().top
                    },1500,'linear')
                }
            }
        })
    })
    $('.ifm').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            e.preventDefault();
            if(!$('html').is(":animated")){
                if(e.originalEvent.wheelDelta > 0 && $(this).prev().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).prev().offset().top
                    },1500)
                }else if(e.originalEvent.wheelDelta < 0 && $(this).next().offset() != undefined){
                    $('html').stop().animate({
                        scrollTop:$(this).next().offset().top
                    },1500,'linear')
                }
            }
        })
    })
    $('.skill h2').click(function(){ 
        $(this).fadeOut()
        $(this).fadeOn('.clicks')
    })
});