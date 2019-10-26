import content from './tech.ejs'
import layout from 'layoutBase'
const pageTitle = 'Technology'
const pageKeywords = 'dopex technology'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
