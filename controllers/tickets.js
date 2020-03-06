const Ticket = require('../models/ticket');

module.exports = {
    index,
    main,
    new: newTicket,
    create,
    show,
};

function show(req, res) {
    Ticket.findById(req.params.id, function (err, ticket) {
        if (err) return err;
        console.log(ticket)
        res.render('tickets/show', {
            user: req.user,
            ticket
        })
    })
}

function create(req, res) {
    req.body['user'] = req.user._id
    const ticket = new Ticket(req.body)

    ticket.save(function (err) {
        if (err) console.log(err);
        res.redirect('/tickets');
    })
}

function newTicket(req, res) {
    // req.body['user'] = req.user._id;
    res.render('tickets/new', {
        user: req.user,
    })
}

function main(req, res) {
    Ticket.find({}, function (err, tickets) {
        if (err) console.error(err)
        res.render('tickets/index', {
            user: req.user,
            tickets: tickets
        })
    })
}

function index(req, res, next) {
    res.render('index', {
        user: req.user,

    });
};

