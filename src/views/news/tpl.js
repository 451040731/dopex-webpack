import content from './news.ejs'
import layout from 'layoutBase'
const pageTitle = 'What is CBD'
const pageKeywords = 'dopex - What is CBD'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
