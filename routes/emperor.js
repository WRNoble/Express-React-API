const express = require('express');
const router = express.Router();
const Emperor = require("../models/emperor-schema")

router.get('/', function(req, res) {
    Emperor.find({}).then(emperor => {
        res.json(emperor);
    });
});

router.get('/name/:name', function(req, res) {
        Emperor.find({name: req.params.name}).then(emperor => {
        res.json(emperor);
    })
});

router.get('/id/:id', function(req, res) {
        Emperor.findById({'_id': req.params.id}).then(emperor => {
        res.json(emperor);
    })
});

router.post('/', function(req, res) {
        Emperor.create(req.body).then(emperor => {
        res.json('/');
    })
});

router.put('/id/:id', function(req, res) {
        Emperor.findOneById({'_id': req.params.id}, req.body, { new: true }).then(emperor => {
        res.json('/');
    })
});

router.delete('/id/:id', function(req, res) {
        Emperor.findOneAndRemove({ '_id': req.params.id}).then(emperor => {
        res.json(emperor);
    })
});
// router.post('/', function(req, res) {
//     res.json('/', req.params);

// });
// router.put('/emperor/:id', function(req, res){
//     res.json(req.params.name);

// });
// router.delete('/emperor/:id', function(req, res){
//     res.json(req.params.name);

// });

module.exports = router;