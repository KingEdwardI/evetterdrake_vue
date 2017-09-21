const express = require('express')
const fs = require('fs')
const https = require('https');
const app = express()

app.use('/', express.static(__dirname + '/dist'))

app.use('/img', express.static(__dirname + '/static/assets/'))

app.use(express.static(__dirname +'/static'))

try {
  var httpsConfig = {
    key: fs.readFileSync('/etc/letsencrypt/live/evetterdrake.me/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/evetterdrake.me/cert.pem'),
  }

  var httpsServer = https.createServer(httpsConfig, app)
  httpsServer.listen(443)
}
catch(e){
}
app.listen(80)
