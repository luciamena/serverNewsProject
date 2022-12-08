const express = require('express');
const controller = require('../../controllers/newsController');

const router = express.Router();

router.get('/', controller.listNews);
router.get('/archived', controller.listArchived);
router.post('/', controller.addNews);
router.put('/:id', controller.updateNews);
router.delete('/:id', controller.destroyNews);

module.exports = router;
