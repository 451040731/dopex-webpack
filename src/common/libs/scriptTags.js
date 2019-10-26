// Global site tag (gtag.js) - Google Analytics
const googleAnalyzer = () => {
  const state = {
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-135358145-2',
    context: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-135358145-2');`
  }

  return `
    <script async src="${state.src}"></script>
    <script>${state.context}</script>
  `
}

module.exports = {
  googleAnalyzer
}
