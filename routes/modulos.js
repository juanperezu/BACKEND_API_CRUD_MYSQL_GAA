// tabNine
const express=require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

// todos los middleware get,put, .. me´todos
router.get('/',(req, res) => {
mysqlConnection.query('SELECT * FROM modulos ORDER BY id',(err,rows,fields)=>{
// si no hay error
 if(!err){ // entonces haga
res.json(rows); // verdadero
}else{ // sino es falso haga
console.log(err);
}// fin si 
});// fin conexion consulta

});// fin mostrar todos los módulos

router.get('/modulo/:id',(req,res)=>{
const {id}= req.params;
mysqlConnection.query("SELECT * from modulos WHERE id= ?",[id],(err,rows,fields)=>{
if(!err){
res.json(rows[0]);
}else{
console.log(err);
} // fin sin
});// fin conex consultar módulo por id
});// fin buscar módulos por su id

// Agregar un nuevo módulo
router.post('/nuevo-modulo',(req, res) => {
const{modulo,modprefijo} = req.body;// captura de datos
let moduloArray=[modulo,modprefijo];// define arreglo de los datos capturados
// definic script sql en una variable nuevoModulo
let nuevoModulo ='INSERT INTO modulos(modulo, mod_prefijo)values(?,?)';
mysqlConnection.query(nuevoModulo,moduloArray,(err,results,fields)=>{
// si hay un error
if(err){ // vedadero
return console.error(err);
}else{ // sino 
res.json({message:modulo + ' Módulo Creado'})
}// fin si
});// fin conexion guardar un modulo
});// fin guardar un nuevo módulo


module.exports=router; // siempre de última
