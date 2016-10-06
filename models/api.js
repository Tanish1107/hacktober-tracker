const http = require('choo/http')

const api = {
  namespace: 'api',
  state: {
    /* initial values of state inside the model */
    // title: 'Set the title'
    pull_requests: [],
    error: null
  },
  reducers: {
    /* synchronous operations that modify state. Triggered by actions. Signature of (data, state). */
    // update: (data, state) => ({ title: data.value })
    updateState: (data, state) => ({ pull_requests: data })
  },
  effects: {
    // asynchronous operations that don't modify state directly.
    // Triggered by actions, can call actions. Signature of (data, state, send, done)
    /*
     myEffect: (data, state, send, done) => {
    // do stuff
    }
    */
    request: (data, state, send, done) => request(data, send)
  }
}

const request = (name, send, state) => {
  const options = {
    q: 'created:2016-09-30T00:00:00-12:00..2016-10-31T23:59:59-12:00+type:pr+is:public+author:' + name
  }

  http(`https://api.github.com/search/issues?q=${options.q}`, { json: true }, (err, res, body) => {
    if (err) return err

    if (res.statusCode !== 200 || !body) {
      return console.log('Something went wrong :(') //TODO send to proper error handling
    }

    console.log(body)
    let processedElements = []
    body.items.forEach((element) => {
      const repo = element.pull_request.html_url.substring(19, element.pull_request.html_url.search('/pull'))
      const hacktoberFestLabels = element.labels.filter((label) => {
        return label.name.toLowerCase() === 'hacktoberfest'
      })

      const processedElement = {
        repo: repo,
        title: element.title,
        url: element.html_url,
        state: element.state,
        hasHacktoberFestLabel: hacktoberFestLabels > 0
      }

      processedElements.push(processedElement)
    })

    send('api:updateState', processedElements, (err) => {
      if (err) return err
    })
  })
}

module.exports = api
