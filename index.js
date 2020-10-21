
const express=require('express');
const app =express();
const routes = require('./routes/routes');

// Ajustes
app.set('port',3000);

// middleware 
app.use(express.json());

// ajustes
app.use('/api',routes);
app.listen(app.get('port'),()=>{
console.log('servidor corriendo  en puerto ' +app.get('port'));

})


