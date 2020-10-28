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
/*
        "id":1,
        "documento": "1000444579",
        "tipo_documento": "TI",
        "nombres": "Leysi ",
        "correo":"asasasasasa",
        "apellidos": "vlaentina Modificado",
        "contrasena": "34c958e8afa723e3806b37fffa2d64d2ee0ceef9",
        "telefono_celular": "3023458971",
        "fecha_nacimiento": "1999-10-09",
        "institucion_id": 5*/
        
router.put('/estudiante/:id',(req,res)=>{
    const { nombres, apellidos, correo, documento, telefono_celular,
        fecha_nacimiento, institucion_id } = req.body;
    const { id } = req.body;
    mysqlConnection.query(`UPDATE actores SET nombres=?,apellidos=?,correo=?, documento=?,telefono_celular=?,
                          fecha_nacimiento=?,institucion_id=?  WHERE id=? `,[nombres, apellidos, correo, documento, telefono_celular,
            fecha_nacimiento, institucion_id, id], (err, rows, fields) => {
                if (!err) {
                    res.json({ status: 'Estudiante actualizado' });
                } else {
                    console.log(err);
                }// fin si

           }//  
    );
})// fin editar

router.get('/estudiante/:id',(req,res)=>{
    const {id} =req.params;
    mysqlConnection.query('SELECT * from actores where id=?',[id],(err,rows,fields)=>{
    if(!err){
       res.json(rows[0]); 
    }else{
    console.log(err);
    }});
    })// fin

module.exports=router;