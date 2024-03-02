const studentModel = require('../models/studentModel');

let studentsArray = [
    {
        "numCtrol": "20400734",
        "nombre": "Isidro",
        "carrera": "ISC",
        "materias": {
            "Funis": 50,
            "GPS": 87,
            "Over": 100
        },
        "semestre": "8"
    },
    {
        "numCtrol": "20400737",
        "nombre": "Isidro",
        "carrera": "ISC",
        "materias": {
            "Funis": 50,
            "GPS": 87,
            "Over": 100
        },
        "semestre": "8"
    },
    {
        "numCtrol": "20400521",
        "nombre": "Maria",
        "carrera": "ITC",
        "materias": {
            "Database": 78,
            "Networks": 92,
            "Programming": 85
        },
        "semestre": "6"
    },
    {
        "numCtrol": "20400678",
        "nombre": "Carlos",
        "carrera": "IME",
        "materias": {
            "Math": 95,
            "Physics": 88,
            "Chemistry": 75
        },
        "semestre": "4"
    },
    {
        "numCtrol": "20400987",
        "nombre": "Laura",
        "carrera": "ISC",
        "materias": {
            "Algorithms": 80,
            "Data Structures": 92,
            "Web Development": 88
        },
        "semestre": "7"
    },
    {
        "numCtrol": "20400456",
        "nombre": "Juan",
        "carrera": "ITC",
        "materias": {
            "Mobile Apps": 75,
            "UI/UX Design": 85,
            "Databases": 90
        },
        "semestre": "5"
    },
    {
        "numCtrol": "20400321",
        "nombre": "Sofia",
        "carrera": "IME",
        "materias": {
            "Statics": 85,
            "Dynamics": 78,
            "Mechanics": 92
        },
        "semestre": "3"
    },
    {
        "numCtrol": "20400234",
        "nombre": "Daniel",
        "carrera": "ISC",
        "materias": {
            "AI": 88,
            "Machine Learning": 94,
            "Natural Language Processing": 87
        },
        "semestre": "9"
    },
    {
        "numCtrol": "20400876",
        "nombre": "Elena",
        "carrera": "ITC",
        "materias": {
            "Cybersecurity": 90,
            "Network Administration": 85,
            "Operating Systems": 78
        },
        "semestre": "6"
    },
    {
        "numCtrol": "20400123",
        "nombre": "Roberto",
        "carrera": "IME",
        "materias": {
            "Materials Science": 82,
            "Thermodynamics": 75,
            "Fluid Mechanics": 88
        },
        "semestre": "2"
    }
]
;

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
    getFailedMaterias,
    addStudent,
    updateStudentInfo,
    deleteStudent
};