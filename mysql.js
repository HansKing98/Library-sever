var mysql = require('knex')({
  client: 'mysql',
  connection: {
    host : '118.190.146.72', // IP地址
    user : 'Library', // 数据库用户名
    password : 'Gh6i74EnxePCNErD', // 数据库密码（我的没用设置密码的所以为空）
    database : 'Library' // 连接到的数据库的名字
  }
});

module.exports = { mysql }