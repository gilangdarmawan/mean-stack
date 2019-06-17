module.exports = (app) => {
    const doctors = require('./doctor.controller.js');

    // Create a new Doctor
    app.post('/doctors', doctors.create);

    // Retrieve all Doctors
    app.get('/doctors', doctors.findAll);

    // Retrieve a single Doctor with doctorId
    app.get('/doctors/:doctorId', doctors.findOne);

    // Update a Note with doctorId
    app.put('/doctors/:doctorId', doctors.update);

    // Delete a Note with doctorId
    app.delete('/doctors/:doctorId', doctors.delete);
}