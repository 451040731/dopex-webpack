/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './tech.scss'

import imgUrl from '@/common/assets/images/tech/tech4_img.gif';
import imgUrl1 from '@/common/assets/images/tech/tech4_img1.gif';

$(document).scroll(function () {
    if ($('.tech3').offset().top > $(document).scrollTop()) {
        if ($(".tech4_img").attr("isOpen") == 1) {
            $(".tech4_img").attr("src", imgUrl);
            $(".tech4_img").attr("isOpen", 0);
        }
    } else if ($('.tech3').offset().top < $(document).scrollTop()) {
        if ($(".tech4_img").attr("isOpen") == 0) {
            $(".tech4_img").attr("src", imgUrl1);
            $(".tech4_img").attr("isOpen", 1);
        }
    }
}); 