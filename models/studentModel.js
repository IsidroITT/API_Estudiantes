// Estudiante.js
class Estudiante {
  materiasArray = [];
  
  constructor(numCtrol, nombre, carrera, semestre) {
    this.numCtrol = numCtrol;
    this.nombre = nombre;
    this.carrera = carrera;
    this.materias = this.materiasArray;
    this.semestre = semestre;
  }
}
  
module.exports = Estudiante;