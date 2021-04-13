var express = require('express');
var router = express.Router();
const todo = require('../db/models/todo');

router.get('/', async (req, res, next) => {
    try {
       const getData = await todo.find({taskName : {$exists: true}});
        res.status(201).send(getData);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;