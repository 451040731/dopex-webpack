/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './hc.scss'
import 'animate.css'
import { WOW } from 'wowjs'

import hcPic1 from '@/common/assets/images/hc/hc1-pic1.gif'
import hcPic2 from '@/common/assets/images/hc/hc1-pic2.gif'

$(document).scroll(function () {
    if ($('.hc1-2').offset().top > $(document).scrollTop()) {
        if ($(".hc1-2 .pic1").attr("isopen") == 1) {
            $(".hc1-2 .pic1").attr("src", hcPic1);
            $(".hc1-2 .pic1").attr("isopen", 0);
        }
    } else if ($('.hc1-2').offset().top < $(document).scrollTop()) {
        if ($(".hc1-2 .pic1").attr("isopen") == 0) {
            $(".hc1-2 .pic1").attr("src", hcPic2);
            $(".hc1-2 .pic1").attr("isopen", 1);
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