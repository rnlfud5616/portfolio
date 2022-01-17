$(document).ready(function(){
    $(window).scroll(function(){
        let sPos01 = $(this).scrollTop();

        $('.status1').text(sPos01);

        if(sPos01 >= 800){
            $('.graph02 .eighty').animate({'width':'80%'}, 1500, 'easeOutQuint')
            $('.graph02 .eighty-five').animate({'width':'85%'}, 1500, 'easeOutQuint')
            $('.graph02 .ninety').animate({'width':'90%'}, 1500, 'easeOutQuint')
            $('.graph02 .sixty-five').animate({'width':'65%'}, 1500, 'easeOutQuint');
        }
    });

    var chart = $('.chart');
    var chartOST =chart.offset().top-300;
    var excuted = false;

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(excuted==false){
                chart.each(function(){

                    var item = $(this);
                    var title = item.find('h2');
                    var targetNum = title.attr('data-num');
                    var circle = item.find('circle');
            
                    $({rate:0}).animate({rate:targetNum},
                        {
                            duration:1500,
                            progress:function(){
                                var now = this.rate;
                                var amount = 310 - (310*now/100);
                                console.log(now);
                                title.text(Math.floor(now));  //숫자가 소수점이 나오지 않게 하는 방법
                                circle.css({strokeDashoffset:amount})
                            }
                    });
                });
                excuted =true;
            
            }
    
        }
    });

    let n = $('#gallery > ul > li').index()+1;

    const g_nav = $('#gallery > ul > li');

    g_nav.click(function(){
        n = $(this).index()+1;
        console.log(n);

        $('.banner > a img').attr('src', './img/artboard0'+n+'.jpg').css('opacity','0').stop().animate({'opacity':'1'}, 1000);

        return false;
    });
/////////////////////
    const gbtn = $('.g_lnb >ul >li >a');

    $('.g_lnb > ul >li:first-child a').addClass('act01'); 

    gbtn.click(function(){
        $('.g_lnb > ul > li > a').removeClass('act01');
        $(this).addClass('act01');

        return false;
    });

    const all = $('.g_lnb > ul  > li:first-child a');
    const html5 = $('.g_lnb > ul  > li:nth-child(2) a');
    const css3 = $('.g_lnb > ul  > li:nth-child(3) a');
    const JAVAscript = $('.g_lnb > ul  > li:nth-child(4) a');
    const jQuery = $('.g_lnb > ul  > li:last-child a');
   
    all.click(function(){
        $('.g_list >li').hide();
        $('.g_list >li').stop().fadeIn();
    });

    html5.click(function(){
        $('.g_list >li').hide();
        $('.html5').stop().fadeIn();
    });

    css3.click(function(){
        $('.g_list >li').hide();
        $('.css3').stop().fadeIn();
    });

    JAVAscript.click(function(){
        $('.g_list >li').hide();
        $('.JAVAscript').stop().fadeIn();
    });

    jQuery.click(function(){
        $('.g_list >li').hide();
        $('.jQuery').stop().fadeIn();
    });
});