
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DatoSchema = new Schema({
    base: {type: String, required: true, max: 100},
    coleccion: {type: String, required: true, max: 100},
    id: {type: Number, required: true, max: 100},
    dato: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Datos', DatoSchema);
