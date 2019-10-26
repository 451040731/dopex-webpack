import layout from './layout.ejs'
import headerBase from '../base/headerBase/headerBase.ejs'
import footerBase from '../base/footerBase/footerBase.ejs'
import header from '../base/header/header.ejs'
import warningMssage from '@/components/warningMssage/warningMssage.ejs'
import footer from '../base/footer/footer.ejs'

// 第三方库静态地址变量--->注入模板
import addThirdLibrary from '../../common/libs/libs.js'

// 注入全局script 添加统计信息或者埋点信息
import scriptTags from '../../common/libs/scriptTags'

/**
 * 页面 title keywords
 */
const printConfig = {
  pageTitle: '',
  pageKeywords: ''
}


/**
 * 该处两个方法
 * 第一个为给每个页面注入title对象
 * 第二个是拼装页面,这个比较灵活，看自己需求怎么配置页面，目前给的是一个经典的布局 header + content + footer
 * return this作用是链式调用 用过jq的都懂 ~.~
 */
const moduleExports = {
  init({ pageTitle,pageKeywords }) {
    printConfig.pageTitle = pageTitle,
    printConfig.pageKeywords = pageKeywords
    return this
  },
  run(content) {
    // 此处后续可添加全局的初始化配置加载第三库的选项
    const componentBaseData = Object.assign({}, addThirdLibrary, scriptTags, printConfig)
    const renderData = {
      headerBase: headerBase(componentBaseData),
      footerBase: footerBase(componentBaseData),
      header: header(),
      footer: footer(),
      warningMssage: warningMssage(),
      content
    }
    return layout(renderData)
  }
}

export default moduleExports
