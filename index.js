
const express=require('express');
const app =express();
// definir los servicios, modulos para iniciar el servidor
const routes = require('./routes/routes');
const modulos = require('./routes/modulos');
const colegios=require('./routes/colegios');


// Ajustes
app.set('port',3000);

// middleware 
app.use(express.json());

// ajustes
app.use('/api',routes);
app.use('/api/modulos',modulos);
app.use('/api/colegios',colegios);
// faltan los de julian



app.listen(app.get('port'),()=>{
console.log('servidor corriendo  en puerto ' +app.get('port'));

})


