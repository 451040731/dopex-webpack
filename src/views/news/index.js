/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './news.scss'

import { isMobile } from 'utils/tools'

if(isMobile()){
    $('.list li .text a').on('click',function(){
        $(this).parent().find('.desc').toggleClass('cur')
    })
}
