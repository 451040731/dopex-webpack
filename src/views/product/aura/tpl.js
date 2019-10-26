import content from './aura.ejs'
import layout from 'layoutBase'
const pageTitle = 'aura'
const pageKeywords = 'dopex disposable, aura, aura parameter, aura experience, aura design, aura appearance'

const temp = layout.init({ pageTitle,pageKeywords }).run(content())

export default temp
