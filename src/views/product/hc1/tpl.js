import content from './hc1.ejs'
import layout from 'layoutBase'
const pageTitle = 'hc1'
const pageKeywords = 'dopex ceramic cartridge,hc1, hc1 parameter,hc1 experience,hc1 design'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
