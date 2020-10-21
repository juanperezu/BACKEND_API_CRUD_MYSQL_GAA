const express=require('express');
const router = express.Router();
const mysqlConnection =require('../db/db');

///dsdsdsroute
router.get('/estudiantes',(req,res)=>{
mysqlConnection.query('SELECT * FROM actores ',(err,rows,fiels)=>{
//callback
// si no hay error
if(!err){ // verdadero
res.json(rows);
}else{
console.log(err);
}
})
})// fin  get/Estudiantes
/* CRER un nuevo estudiantes */
router.post('/nuevo-estudiante',(req,res)=>{
const{nombres,apellidos,correo,documento,telefono_celular,
fecha_nacimiento,institucion_id}=req.body;

let estudiante=[nombres,apellidos,correo,documento,telefono_celular,
                fecha_nacimiento,institucion_id];
let nuevoEstudiante=`INSERT INTO actores(nombres,apellidos,correo,documento,telefono_celular,
                    fecha_nacimiento,institucion_id)VALUES(?,?,?,?,?,?,?)`;               
mysqlConnection.query(nuevoEstudiante,estudiante,(err,results,fields)=>{
if(err){
return console.error(err.message);
}else{
res.json({message:'Estudiante Matriculado'});

}})// fin query insert  modificacioss
})// fin nuevo-estudiante

// editar un Estudiante
router.put('/estudiante/:id',(req,res)=>{
    const { nombres, apellidos, correo, documento, telefono_celular,
        fecha_nacimiento, institucion_id } = req.body;
    const { id } = req.body;
    mysqlConnection.query(`UPDATE actores SET nombres=?,apellidos=?,correo=?,
                           documento=?,telefono_celular=?,
                          fecha_nacimiento=?,institucion_id=?  WHERE id=?`,
            [nombres, apellidos, correo, documento, telefono_celular,
            fecha_nacimiento, institucion_id, id], (err, rows, fields) => {
                if (!error) {
                    res.json({ status: 'Estudiante actualizado' });
                } else {
                    console.log(err);
                }// fin si


            }//  
    )




})// fin editar



module.exports=router;