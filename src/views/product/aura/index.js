/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './aura.scss'
import 'animate.css'
import { WOW } from 'wowjs'

//import aura from '@/common/assets/images/aura/aura3-pic1.png'

// 产品图切换
$('.aura-slide-btn li').mouseover(function(){
    $(this).addClass('cur').siblings().removeClass('cur');
    $('#aura-slide-img').find('img').eq($(this).index()).show().siblings().hide();
})

$(window).scroll(function () {
    if($(window).scrollTop()> $('.aura1').offset().top - 100){
        $('.aura1').addClass("animate");
    }else{
        $('.aura1').removeClass("animate");
    }
})

let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 280,
    mobile: false,
    live: true
});
wow.init();