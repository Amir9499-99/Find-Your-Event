var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection

const ticketSchema = new Schema({
    name: {type: String, enum: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']},
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    price: {type: Number}
})

module.exports = mongoose.model('Ticket', ticketSchema);