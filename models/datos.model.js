
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DatoSchema = new Schema({
    id: {type: Number, required: true, max: 100},
    dato: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Product', DatoSchema);