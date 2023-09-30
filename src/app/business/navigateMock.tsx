import Router from 'next/router'

const navigateMaintainingState = (href, {} = {}) => {
  console.log('navigating to ', href)
  let replaceLang = href.replace('/en/', '/[lang]/').replace('/zh/', '/[lang]/')
  if (replaceLang.endsWith('/')) {
    replaceLang = replaceLang.substring(0, replaceLang.length - 1)
  }
  Router.push(replaceLang, href)
  console.log('navigated to ', href)
}

const navigateSSr = (href, {} = {}) => {
  console.log('navigating ssr to ', href)
  window.location.href = href
  console.log('navigated ssr to ', href)
}
export { navigateSSr }

const navigateNewPage = (href, params = {}) => {
  console.log('navigating ssr to ', href)
  Router.push({
    pathname: href,
    query: params,
  })
  console.log('navigated ssr to ', href)
}
export { navigateMaintainingState, navigateNewPage }
