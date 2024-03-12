// Estudiante.js
class Estudiante {
  constructor(numCtrol, nombre, carrera, semestre) {
    this.numCtrol = numCtrol;
    this.nombre = nombre;
    this.carrera = carrera;
    this.materias = [];
    this.semestre = semestre;
  }
}

module.exports = Estudiante;