const Ticket = require('../models/ticket');

module.exports = {
    create,
    delete: deleteComment,
    editShow,
    update
};

function update(req, res) {
    console.log('function is being called')
    Ticket.findById(req.params.ticketId, function(err, foundTicket) {
        const foundComment = foundTicket.comment.id(req.params.commentId)
        foundComment.content = req.body.content
    console.log('this is' + foundTicket)
        foundTicket.save(function (err) {
            res.redirect('/tickets/' + foundTicket._id)
        })
    })
}



function editShow(req, res) {
    console.log("EDIT SHOW PAGE")
    Ticket.findOne({'comment._id': req.params.commentId}, function(err, ticket){
        let commentThatWeFound
        let commentIdFromParams = req.params.commentId
        ticket.comment.forEach(function(com){
            if (commentIdFromParams == com._id) {
                commentThatWeFound = com
            }
        })
        if (err) return err;

        console.log("here is the ticket ",ticket)
        console.log("FOUND COMMENT: ", commentThatWeFound)
        res.render('tickets/edit', {
            user: req.user,
            foundComment: commentThatWeFound,
            ticket:ticket,

        })

    })
}

function deleteComment(req, res) {
    Ticket.findOne({'comment._id': req.params.commentId}, function(err, ticket) {
        ticket.comment.id(req.params.commentId).remove()
        ticket.save(function(err){
            if (err){
                console.log(err)
            } else {
                res.redirect('/tickets/' + req.params.ticketId);
            }
        })
    });
}


function create(req, res) {
    Ticket.findById(req.params.id, function(err, ticket, ) {
        req.body.createdBy = req.user._id;
        ticket.comment.push(req.body);
        ticket.save(function(err) {
            res.redirect(`/tickets/${ticket._id}`);
        });
    });
}