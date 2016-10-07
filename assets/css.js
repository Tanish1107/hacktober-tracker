const sf = require('sheetify')

const style = sf`
  .bg-hacktober {
    background-color: #b0581d;
  }

  .bg-hacktober-light {
    background-color: #f4f1ec;
  }

  .hover-bg-hacktober-light:hover,
  .hover-bg-hacktober-light:focus {
    background-color: #f4f1ec;
  }

  .b--hacktober-light {
    border-color: #f4f1ec;
  }
`

module.exports = style
