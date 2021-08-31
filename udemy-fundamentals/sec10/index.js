const http = require('http')
const url = 'http://localhost:3000'
const options = {
  method: 'GET'
}
const req = http.request(url, options, (res) => {
  console.log('indexの7行目のresは' + res)
})
req.end()
