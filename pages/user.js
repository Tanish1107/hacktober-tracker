/* Page: user */

const html = require('choo/html')
const search = require('../elements/search')
const pr = require('../elements/pr')
const progressBar = require('../elements/progress')
const style = require('../assets/css')

function user (state, prev, send) {

  const progress = state.api.pull_requests.length > 4 ? 4 : state.api.pull_requests.length

  return html`
    <div class="sans-serif mt3 ph2 ph0-l ${style}" onload=${() => {send('api:request', state.params.user)}}>
      <div class="mw7 center">
        <h1 class="f4 tc ttu dark-gray">Hacktober tracker</h1>
        ${search(state, prev, send, state.params.user)}
        ${progressBar(progress)}
        <div class="tc f3 f2-ns mt3">${state.api.error}</div>
        ${state.api.pull_requests.map((e) => {
          console.log(e)
          return html`
            <a href="${e.url}" class="link">${pr(e.repo, e.state, e.title, e.url)}</a>
          `
        })}
      </div>
    </div>
  `
}

module.exports = user
