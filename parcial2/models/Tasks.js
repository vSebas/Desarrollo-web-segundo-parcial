const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    Nombre: String,
    Identificador: String,
    Email: String,
    Carrera: String
})

module.exports = mongoose.model('Alumno', taskSchema)
// export default model('Task', taskSchema); // When imported, add require(...).default