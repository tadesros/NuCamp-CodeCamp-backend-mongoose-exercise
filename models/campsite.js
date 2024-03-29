const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//create model named campsite using this schema
//constructor function
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;