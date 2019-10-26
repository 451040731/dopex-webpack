import { isMobile } from 'utils/tools'

if(isMobile()){
    $('.menu-m').on('click',function(){
        $(this) .parents('.header ').toggleClass('active')
    })
    $(document).on('click','.nav .product span',function(){
        $(this).parent().toggleClass('cur')
        $(this).parent().find('.sub-nav').slideToggle().parents('.product').siblings('.product').removeClass('cur').find('.sub-nav').slideUp()
    })
}