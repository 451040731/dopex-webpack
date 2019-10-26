import content from './index.ejs'
import layout from 'layoutBase'
const pageTitle = 'DOPEX'
const pageKeywords = 'Premium CBD Devices Specialist'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
