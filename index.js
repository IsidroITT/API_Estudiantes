const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/studentsRoutes');

// Creamos la instancia de express
const app = express();

// Preparamos la aplicacion para JSON y la ruta predeterminada
app.use(bodyParser.json());
app.use('/students', studentsRouter);

// Asignamos el puerto de ejecucion
const PORT = process.env.PORT || 3000;

// Ejecutamos la aplicacion en el puerto asignado
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});