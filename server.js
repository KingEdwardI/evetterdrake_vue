const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/dist'))

app.use('/img', express.static(__dirname + '/static/assets/'))

app.use(express.static(__dirname +'/static'))

app.listen(80)
