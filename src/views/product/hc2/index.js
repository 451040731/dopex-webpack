/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import '../hc1/hc.scss'
import 'animate.css'
import { WOW } from 'wowjs'

import hcPic2 from '@/common/assets/images/hc/hc2-pic.gif'

$(document).scroll(function () {
    if ($('.hc2-2').offset().top < $(document).scrollTop()) {
        if ($(".hc2-2 .hc2-pic").attr("isopen") == "1") {
            $(".hc2-2 .hc2-pic").attr("src", hcPic2);
            $(".hc2-2 .hc2-pic").attr("isopen", 0);
        }
    } 
});


let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 280,
    mobile: false,
    live: true
});
wow.init();