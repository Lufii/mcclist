const controllerRoutes = require('../controllers/routing.js');
module.exports = (app) =>{
  //Returns all students
  app.get('/students', controllerRoutes.getStudents);

  //Creates a student
  app.post('/student/add', controllerRoutes.createStudent);

  //Deletes a student
  app.post('/student/delete', controllerRoutes.deleteStudent);

  //Updates a student
  app.post('/student/edit', controllerRoutes.editStudent);
}
