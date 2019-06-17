const Doctor = require('./doctor.model');

//Create new Doctor
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Doctor content can not be empty"
        });
    }

    // Create a Doctor
    const doctor = new Doctor({
        name: req.body.name || "No doctor name", 
        patient: req.body.patient,
        noshow: req.body.noshow,
        percentage: req.body.percentage
    });

    // Save Doctor in the database
    doctor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the doctor."
        });
    });
};

// Retrieve all doctors from the database.
exports.findAll = (req, res) => {
    Doctor.find()
    .then(doctors => {
        res.send(doctors);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving doctors."
        });
    });
};

// Find a single doctor with a doctorId
exports.findOne = (req, res) => {
    Doctor.findById(req.params.doctorId)
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });            
        }
        res.send(doctor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving doctor with id " + req.params.doctorId
        });
    });
};

// Update a doctor
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Doctor content can not be empty"
        });
    }

    // Find and update doctor with the request body
    Doctor.findByIdAndUpdate(req.params.doctorId, {
        name: req.body.name || "No doctor name", 
        patient: req.body.patient,
        noshow: req.body.noshow,
        percentage: req.body.percentage
    }, {new: true})
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });
        }
        res.send(doctor);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.doctorId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Doctor.findByIdAndRemove(req.params.doctorId)
    .then(doctor => {
        if(!doctor) {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });
        }
        res.send({message: "Doctor deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Doctor not found with id " + req.params.doctorId
            });                
        }
        return res.status(500).send({
            message: "Could not delete doctor with id " + req.params.doctorId
        });
    });
};