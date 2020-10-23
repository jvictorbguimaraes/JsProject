const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentLastName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    studentProgram: {
        type: String,
        required: true
    },
    studentAddress: {
        type: String,
        required: true
    },
    studentGPA: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('Posts', PostSchema);   
