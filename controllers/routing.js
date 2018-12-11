module.exports = {

  createStudent: (req, res) => {
    db.collection('students').save(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('Saved student to DB')
      res.json(result);
    })
  },

  getStudents: (req, res) => {
    db.collection('students').find().toArray(function(err, results){
      console.log(results);
      res.json(results);
    })

  },

  editStudent: (req,res) => {
    db.collection('students').updateOne({'name':req.body.name, 'lastname':req.body.lastname, 'birthdate':req.body.birthdate, 'hobbies':req.body.hobbies}, {
      $set: {
      'name':req.body.nname,
      'lastname':req.body.nlastname,
      'birthdate':req.body.nbirthdate,
      'hobbies':req.body.nhobbies}
    },
    (err, result) => {
      if (err) return console.log(err);
      console.log('Student updated', result);
      res.json(result);
    })
  },



  deleteStudent: (req,res) => {
    //Change ID here too
    db.collection('students').deleteOne({'name':req.body.name, 'lastname':req.body.lastname, 'birthdate':req.body.birthdate, 'hobbies':req.body.hobbies}, (err, result) => {
      if (err) return console.log(err);
      console.log('Deleted item from DB', result);
      res.json(result);
    })
  }
}
