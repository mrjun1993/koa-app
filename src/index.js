const Koa = require('koa')
const path = require('path')
const helmet = require('koa-helmet')
const statics = require('koa-static')

const router = require('./routes/index')

const app = new Koa()

app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())

app.listen(3000)