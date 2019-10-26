import content from './hc2.ejs'
import layout from 'layoutBase'
const pageTitle = 'hc2'
const pageKeywords = 'dopex plastic cartridge,hc2, hc2 parameter,hc2 experience,hc2 design'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
