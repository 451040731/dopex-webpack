// 公用css 引入入口
import '../css/base.scss'

// @babel/polyfill
import '@babel/polyfill'

// 公用js逻辑编写区域
import './header'
import './footer'

import { getCookie, setCookie } from 'utils/cookie'

import EjsTest from '@/templates/index.test.ejs'

class basePage {
    init() {
		this.warning21()
		this.navEjsTemplete()
		this.scrollActive()
	}
    warning21() {
        //21+
        let warningOverlay = $('#warning-message')
        let warningConfirm = $('#warning-message .confirm')
        let warningCancel = $('#warning-message .cancel')
        if (getCookie('warning-message')) {
            warningOverlay.css('display', 'none')
        } else {
            warningOverlay.css('display', 'block')
            $('.dopex').hide()
        }
        warningConfirm.click(() => {
            if($('#remember').is(':checked')){
				setCookie('warning-message', "enter", 31536e4);
			}
			warningOverlay.css("display", "none");
			$('.dopex').show();
			$(".dopex .logo1").fadeOut(1000);
			$(".dopex .logo2").delay(1500).fadeIn(1000);
        })
        warningCancel.click(() =>{
            window.location.href = 'about:blank'
        })
    }
    //滚动header加上白色背景
    scrollActive(){
        headActive();
        $(document).scroll(function () {
            headActive();
        });

        function headActive(){
            if ($(document).scrollTop() > 10) {
                $('.header').addClass('bgf');
            }else{
                $('.header').removeClass('bgf');
            }
        }
    }
	navEjsTemplete() {
        // 导航链接
        const data = [
            {
                index: 0,
				key: 'Products',
				value: [
					{
						key: 'aura',
						link: '/html/aura.html'
					},
					{
						key: 'HC1',
						link: '/html/hc1.html'
					},
					{
						key: 'hc2',
						link: '/html/hc2.html'
					}
				]
            },
            {
                index: 1,
                key: 'News',
				value: [
					{
						key: 'What is CBD',
						link: '/html/news.html'
					}
				]
            },
            {
                index: 2,
                link: '/html/about.html',
                key: 'About Us'
            },
            {
                index: 3,
                link: '/html/tech.html',
                key: 'Technology'
            }
        ]
        $('.nav').html(
            EjsTest({
                index: data
            })
        )
    }
}

new basePage().init()
