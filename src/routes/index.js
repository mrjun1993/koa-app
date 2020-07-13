const koaCombineRouters = require('koa-combine-routers')

const a = require('./a')
const b = require('./b')
module.exports = koaCombineRouters(a,b)