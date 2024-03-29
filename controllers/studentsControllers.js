const studentModel = require('../models/studentModel');

let studentsArray = [
    {
        "numCtrol": "20400734",
        "nombre": "Isidro",
        "carrera": "ISC",
        "materias": [
            {
                "nombre": "Funis",
                "calificacion": 90
            },
            {
                "nombre": "Programación",
                "calificacion": 68
            },
            {
                "nombre": "Moviles",
                "calificacion": 75
            },
            {
                "nombre": "GPS",
                "calificacion": 85
            }
        ],
        "semestre": "8"
    },
    {
        "numCtrol": "20400737",
        "nombre": "Isidro",
        "carrera": "ISC",
        "materias": [
            {
                "nombre": "Funis",
                "calificacion": 90
            },
            {
                "nombre": "Programación",
                "calificacion": 68
            },
            {
                "nombre": "Moviles",
                "calificacion": 75
            },
            {
                "nombre": "GPS",
                "calificacion": 85
            }
        ],
        "semestre": "8"
    },
    {
        "numCtrol": "20400521",
        "nombre": "Maria",
        "carrera": "ITC",
        "materias": [
            {
                "nombre": "Funis",
                "calificacion": 90
            },
            {
                "nombre": "Programación",
                "calificacion": 68
            },
            {
                "nombre": "Moviles",
                "calificacion": 75
            },
            {
                "nombre": "GPS",
                "calificacion": 85
            }
        ],
        "semestre": "6"
    },
    {
        "numCtrol": "20400678",
        "nombre": "Carlos",
        "carrera": "IME",
        "materias": [
            {
                "nombre": "Funis",
                "calificacion": 90
            },
            {
                "nombre": "Programación",
                "calificacion": 68
            },
            {
                "nombre": "Moviles",
                "calificacion": 75
            },
            {
                "nombre": "GPS",
                "calificacion": 85
            }
        ],
        "semestre": "4"
    },
    {
        "numCtrol": "20400987",
        "nombre": "Laura",
        "carrera": "ISC",
        "materias": [
            {
                "nombre": "Funis",
                "calificacion": 90
            },
            {
                "nombre": "Programación",
                "calificacion": 68
            },
            {
                "nombre": "Moviles",
                "calificacion": 75
            },
            {
                "nombre": "GPS",
                "calificacion": 85
            }
        ],
        "semestre": "7"
    }
];

// Metodos get
function getAllstudents(){
    return studentsArray;
};

function getStudentByNumCtrol(numCtrol){
    return studentsArray.find(student => student.numCtrol === numCtrol);
};

function getStudentAverage(numCtrol){
    const student = getStudentByNumCtrol(numCtrol);

    // Detenemos el metodo si no encontramos al estudiante
    if(!student) return null;

    const average = student.materias.reduce((acc, materia) => acc + materia.calificacion, 0) / student.materias.length;
    return average;
};

function getAllStudentAverage(){
    const allAverages = studentsArray.map(student => {
        return {
            numCtrol: student.numCtrol,
            nombre: student.nombre,
            promedio: student.materias.reduce((acc, materia) => acc + materia.calificacion, 0) / student.materias.length
        };
    });

    return allAverages;
}

function getFailedMaterias(numCtrol){
    const student = getStudentByNumCtrol(numCtrol);

    // Detenemos el metodo si no encontramos al estudiante
    if(!student) return null;

    const failedMaterias = student.materias.filter(materia => materia.calificacion < 70);
    return failedMaterias;
};

// Metodos post
function addStudent(numCtrol, nombre, carrera, semestre, materias){
    // Si ya existe un estudiante con el mismo número de control, detenemos el metodo
    if (getStudentByNumCtrol(numCtrol)) return null;

    // Creamos un nuevo estudiante
    const newStudent = new studentModel(numCtrol, nombre, carrera, semestre);

    // Agregamos las materias que cursa
    newStudent.materias = materias;

    // Agregamos el estudiante al arreglo de estudiantes
    studentsArray.push(newStudent);

    return newStudent;
};

// Metodos put  
function updateStudentInfo(numCtrol, nombre, carrera, semestre, materias){
    const student = getStudentByNumCtrol(numCtrol);

    // Detenemos el metodo si no encontramos al estudiante
    if(!student) return null;

    // Actualizamos la informacion del estudiante
    student.nombre = nombre;
    student.carrera = carrera;
    student.semestre = semestre;
    student.materias = materias;
    
    return student;
};

// Metodos delete
function deleteStudent(numCtrol){
    const student = getStudentByNumCtrol(numCtrol);

    // Comprobamos si el estudiante existe
    if(!student) return null;

    // Obtenemos el indice del estudiante en el arreglo
    const index = studentsArray.indexOf(student);

    // Detenemos el metodo si no encontramos al estudiante
    if(index === -1) return null;

    // Eliminamos al estudiante del arreglo
    studentsArray.splice(index, 1);

    return student;
};


module.exports = {
    getAllstudents,
    getStudentByNumCtrol,
    getStudentAverage,
    getAllStudentAverage,
    getFailedMaterias,
    addStudent,
    updateStudentInfo,
    deleteStudent
};