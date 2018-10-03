// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/user/Documents/GitHub/lambda-restaurant/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/user/Documents/GitHub/lambda-restaurant/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/user/Documents/GitHub/lambda-restaurant/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/user/Documents/GitHub/lambda-restaurant/src/pages/page-2.js"))
}

