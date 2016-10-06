// Element: pr 
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function pr (repo, state, title, url) {
  return html`
    <div class="hover-bg-hacktober-light br2">
      <div class="pv3 dark-gray ma3">
        <div>
          <h5 class="f4-ns f5 mt0 blue">${repo}</h5>
        </div>
        <p class="mt0 f3-ns f4 lh-copy">${title}</p>
      </div>
    </div>
  `
}

module.exports = pr
