/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './index.scss'

class HomePage {
    init() {
        this.eScroll()
    }

    eScroll() {
        $(window).on('scroll',function(){
            var top = $(this).scrollTop() - $('.technology').offset().top + 120;
            $(".exhale").css({transform:"translate3d(0px,"+-(top/3)+"px,0px)"})//需要设置视差的元素
        })
    }
}

new HomePage().init()
