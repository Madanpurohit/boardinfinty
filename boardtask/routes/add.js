var express = require('express');
var router = express.Router();
const todo = require('../db/models/todo');

var add_minutes = (dt, minutes) => {
    return new Date(dt.getTime() + minutes * 60000); //Adding Duration to time
};

router.post('/', async (req, res, next) => {
    try {
        let minsToBeAdded = req.body.duration; // Fetching Duration From Request
        let dateObj = new Date();
        let expiryDate = add_minutes(dateObj, minsToBeAdded); // Documnet to Be Expired at What date and Time
        todo.collection.insertOne({
            "expireAt": expiryDate,
        });
        req.body.expireAt = expiryDate;
        const taskDoc = new todo(req.body);
        const created = await taskDoc.save();
        res.status(201).send('<h1>Successfully!<h1>')
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;