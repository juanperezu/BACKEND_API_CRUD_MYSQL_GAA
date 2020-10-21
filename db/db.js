
const mysql = require('mysql');
const mysqlConnnection=mysql.createConnection(
{
host: '181.133.136.83',
user: 'mediatecnica',
password: '123',
database: 'lab_mediatecnica',
multipleStatements: true
}); // fin createConnection

mysqlConnnection.connect(function(err){
// si hay un error entonces
    if(err){
// vedadero
console.error(err);
return;
// si no
}else{
// todo está bien (falso)
 console.log('base de datos conectada');
} // fin si err
})

module.exports=mysqlConnnection;