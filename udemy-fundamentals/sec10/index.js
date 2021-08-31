const { URL } = require('url')
const url = new URL('https://www.google.com/')
console.log('indexの3行目のurl.protocolは' + url.protocol)
console.log('indexの4行目のurl.hostは' + url.host)
