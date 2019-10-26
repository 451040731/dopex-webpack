import content from './about.ejs'
import layout from 'layoutBase'
const pageTitle = 'about'
const pageKeywords = 'dopex about'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
