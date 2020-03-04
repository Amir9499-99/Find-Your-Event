const Ticket = require('../models/ticket');

module.exports = {
    index,
    main,
    new: newTicket,
    create
};

function create(req, res) {
    req.body['user'] = req.user._id
    const ticket = new Ticket(req.body)

    ticket.save(function (err) {
        if (err) console.log(err);
        res.redirect('/tickets');
    })
}

function newTicket(req, res) {
    res.render('tickets/new', {
        user: req.user,
    })
}

function main(req, res) {
    Ticket.find({}, function (err, ticket) {
        if (err) console.error(err)
        res.render('tickets/index', {
            user: req.user,
            ticket: ticket
        })
    })
}

function index(req, res, next) {
    res.render('index', {
        user: req.user,

    });
};

