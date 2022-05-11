import('./mongodb_connection.js');
const student = require('./models/Tasks')

async function getStudentById (id) {
    const task = await student.findById(id);
    console.log(task);
};

async function updateStudentById (id, body) {
    await student.findByIdAndUpdate(id, body);
    console.log('Data updated');
}

async function deleteCustomerById (id) {
    await student.findByIdAndRemove(id);
    console.log('Data removed');
}

// 1. Inserta dos registros
const student1 = new student();
const student2 = new student();

student1.Nombre = "Victor Sebastian Martínez Pérez";
student1.Identificador = "A01232474";
student1.Email = "A01232474@tec.mx";
student1.Carrera = "ISD";
student1.save();
student2.Nombre = "Luis Pérez";
student2.Identificador = "A05555555";
student2.Email = "A05555555@tec.mx";
student2.Carrera = "ISD";
student2.save();

//2. Despliega students de base de datos
getStudentById(student1.id);
getStudentById(student2.id);

// 3. Actualiza info del segundo estudiante
updateStudentById(student2.id, { Nombre: 'BORRAR ALUMNO' });
getStudentById(student2.id);

// 4. Borra segundo registro
deleteCustomerById(student2.id);
getStudentById(student1.id);
getStudentById(student2.id);