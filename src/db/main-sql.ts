import mysql = require('promise-mysql')
const promise = require('bluebird')
import config = require('config')

const pool = mysql.createPool({
  host: config.get('db.mysql.host'),
  user: config.get('db.mysql.user'),
  password: config.get('db.mysql.password'),
  port: config.get('db.mysql.port')
})