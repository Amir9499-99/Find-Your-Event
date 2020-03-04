var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection

const cartSchema = new Schema({
    name: String,
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    quantity: Number
})

module.exports = mongoose.model('Cart', cartSchema);