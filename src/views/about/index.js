/**
 * 默认样式+默认逻辑
 */
import '@/common/js/base'
import './about.scss'

require('@/vendor/common/validform.min.js')
require('@/vendor/common/amap.min.js')

import mapIcon from '@/common/assets/images/about/amap-marker.png';

class AboutPage {
    init() {
        this.validform()
        this.map()
    }

    validform() {
        $("#mesForm").Validform({
            btnSubmit : "#mesSubmit",
            tiptype : function(msg,o,cssctl){
                if(!o.obj.is("form")){
                    var objtip=o.obj.parents('li').find(".Validform_checktip");
                    cssctl(objtip,o.type);
                    objtip.text(msg);
                }
            },
            postonce : true,
            ajaxPost : true,
            callback : function(data){
                if(data.status == 1){
                    $('#messagePop,#message').show();
                    $('#messagePop h3').html('SUBMISSION COMPLETED');
                    $('#messagePop p').html('THANKS FOR YOUR LOVE AND SUPPORT FOR DOPEX');
                }else{
                    $('#messagePop img').hide();
                    $('#messagePop,#message').show();
                    $('#messagePop h3').html('add failed');
                }
            }
        });
        $.Tipmsg.r = "";

        $('#mesCancel').on('click',function(){
            $('#message').hide();
        })
    }
    map() {
        //初始化地图
        let map = new AMap.Map('container', {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 16, //初始地图级别
            center: [113.9524205000, 22.533599999], //初始地图中心点
            lang: "en" //可选值：en，zh_en, zh_cn
        });

        //显示地图层级与中心点信息
        function logMapinfo() {
            var zoom = map.getZoom(); //获取当前地图级别
            var center = map.getCenter(); //获取当前地图中心位置

            // document.querySelector("#map-zoom").innerText = zoom;
            // document.querySelector("#map-center").innerText = center.toString();
        };

        //绑定地图移动与缩放事件
        map.on('moveend', logMapinfo);
        map.on('zoomend', logMapinfo);
        // -------------------------------------------------------------------------------------------------------------
        // --------------------------------------------------------------------------------------------------------
        var marker = new AMap.Marker({
            position: map.getCenter(),
            icon: mapIcon,
            offset: new AMap.Pixel(-2, -12)
        });

        marker.setMap(map);

        // 设置鼠标划过点标记显示的文字提示
        // marker.setTitle('我是marker的title');
        AMap.plugin([
            'AMap.ToolBar',
        ], function () {
            // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            map.addControl(new AMap.ToolBar({
                // 简易缩放模式，默认为 false
                liteStyle: true
            }));
        });
    }
}

new AboutPage().init()