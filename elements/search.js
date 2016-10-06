// Element: search
//
// We can use bel instead of choo/html to keep elements modular
// and allow them to easily move outisde of the app.
const html = require('bel')

const search = (state, prev, send, value) => {

  return html`
    <form class="pa3 br2 bg-hacktober-light" onsubmit=${(e) => {
      send('api:request', e.target.githubName.value)
      send('location:set', { pathname: `/${e.target.githubName.value}` })
      e.preventDefault()
    }}>
      <div class="cf">
        <input name="githubName" class="input-reset bn pa3 w-75-ns w-80-m w-100 fl br2-ns br--left-ns f5" value="${value ? value : ''}" placeholder="Your Github username" type="text" />
        <input class="button-reset w-20 fl bn w-25-ns w-20-m w-100 pv3 br2-ns br--right-ns white f5 bg-hacktober" type="submit" value="Track"/>
      </div>
    </form>
  `
}

module.exports = search
