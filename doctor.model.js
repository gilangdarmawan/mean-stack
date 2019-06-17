const mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    name: String,
    patient: Number,
    noshow: Number,
    percentage: String
}, {
        timestamps: true
    });

module.exports = mongoose.model('Doctor', DoctorSchema);