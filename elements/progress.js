// Element: progress
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

function progress (n) {

  const progressPercent = n/4 * 100
  const style = progressPercent === 0
    ? 'bg-hacktober-light dark-grey'
    : `w-${progressPercent} db white bg-hacktober`

  return html`
  <div class="bg-hacktober-light br2 relative h2 w-100 mt2 ba bw3 overflow-hidden b--hacktober-light">
    <span class="bg-black h-100 f6 tr ${style}">
      <span class="ph1">${n}/4</span>
    </span>
  </div>
  `
}

module.exports = progress
