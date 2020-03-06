var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection

const commentSchema = new Schema({
    content: String,
    createdBy: {type: Schema.Types.ObjectId, ref: "Users"}
})

const ticketSchema = new Schema({
    name: String,
    user: {type: Schema.Types.ObjectId, ref: "Users"},
    day: String,
    location: String,
    price: String,
    image: String,
    comment: [commentSchema],
})

module.exports = mongoose.model('Ticket', ticketSchema);