const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsControllers');

// =================================
// Rutas generales sobre '/students'

// ---------------------------------
// Metodos GET

// Get student by numCtrol
router.get('/find', (req, res) => {
    const numCtrol = req.query.numCtrol;

    // Validamos que se haya enviado el número de control
    if (!numCtrol) {
        return res.status(400).send({ error: 'El número de control es requerido' });
    }

    student = studentsController.getStudentByNumCtrol(numCtrol);

    // Validamos la existencia del estudiante
    if (!student) {
        return res.status(404).send({ error: 'No se encontró el estudiante' });
    }

    return res.status(200).send(student);
});

// Get all students
router.get('/', (req, res) => {
    return res.status(200).send(studentsController.getAllstudents());
}); 


// ---------------------------------
// Metodos POST
router.post('/', (req, res) => {
    const { numCtrol, nombre, carrera, semestre, materias } = req.body;
    const newStudent = studentsController.addStudent(numCtrol, nombre, carrera, semestre, materias);

    if(newStudent === null) {
        return res.status(400).send({ error: 'El estudiante ya existe' });
    }

    return res.status(201).send(newStudent);
});

// ---------------------------------
// Metodos PUT
router.put('/', (req, res) => {
    const numCtrol = req.query.numCtrol;
    const { nombre, carrera, semestre, materias } = req.body;
    const updatedStudent = studentsController.updateStudentInfo(numCtrol, nombre, carrera, semestre, materias);

    if(updatedStudent === null) {
        return res.status(404).send({ error: 'No se encontró el estudiante' });
    }

    return res.status(200).send(updatedStudent);
});

// ---------------------------------
// Metodos DELETE
router.delete('/', (req, res) => {
    const numCtrol = req.query.numCtrol;

    const deletedStudent = studentsController.deleteStudent(numCtrol);

    if(deletedStudent === null) {
        return res.status(404).send({ error: 'No se encontró el estudiante' });
    }

    return res.status(200).send({ mensaje: 'Estudiante eliminado correctamente' });
});

//==================================

// =================================
// Rutas sobre '/students/average'
router.get('/average', (req, res) => {
    const numCtrol = req.query.numCtrol;
    const average = studentsController.getStudentAverage(numCtrol);

    // Validamos la existencia del estudiante
    if (average === null) {
        return res.status(404).send({ error: 'No se encontró el estudiante' });
    }

    return res.status(200).send({ average });
});


//Rutas sobre '/students/failed'



// Exportamos el router
module.exports = router;   