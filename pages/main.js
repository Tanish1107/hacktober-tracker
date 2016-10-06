/* Page: main */

const html = require('choo/html')
const search = require('../elements/search')
const style = require('../assets/css')

const main = (state, prev, send) => {
  return html`
    <main class="mw7 center ph2 ph0-l ${style}">
      <div class="mt7">
        <h1 class="f2-ns f3 tc ttu dark-gray">Hacktober tracker</h1>
        ${search(state, prev, send)}
      </div>
    </main>
  `
}

module.exports = main
