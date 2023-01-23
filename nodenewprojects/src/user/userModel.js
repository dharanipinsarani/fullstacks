var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Appoiment: {
        type: String,
        required: true
    },
    feedback: {
            type: String,
            required: true
}});

module.exports = mongoose.model('employees', userSchema);