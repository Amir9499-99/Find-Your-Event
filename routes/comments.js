var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/tickets/:id/comments', commentsCtrl.create);
router.delete('/tickets/:ticketId/comments/:commentId', commentsCtrl.delete);
router.get('/comments/:commentId/edit', commentsCtrl.editShow);
router.put('/comments/:commentid', commentsCtrl.update);

module.exports = router;
