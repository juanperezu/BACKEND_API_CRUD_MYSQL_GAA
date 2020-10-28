
const mysql = require('mysql');
const mysqlConnnection=mysql.createConnection(
{
 /*   La bd de cada PPI
host: 'bprbeudfwg7eeipqbp9t-mysql.services.clever-cloud.com',
user: 'urappmxol0gahuzf',
password: 'piXeRzrY5CoTJ351xaU4',
database: 'bprbeudfwg7eeipqbp9t',
multipleStatements: true
*/

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