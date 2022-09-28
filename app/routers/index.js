const express = require('express');
const router = express.Router();

const controller = require('../controllers');

router.get('/', controller.getHomePage);
router.get('/stack', controller.getStackPage);
router.get('/project/:id', controller.getProjectDetails);

module.exports = router;