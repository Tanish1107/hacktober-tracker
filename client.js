const choo = require('choo')
const app = choo()
const sf = require('sheetify')

sf('tachyons')

app.model(require('./models/api'))

app.router([
  [ '/', require('./pages/main') ],
  [ '/:user', require('./pages/user') ]
])

const tree = app.start()

document.body.appendChild(tree)
