const express = require("express");
const router = express.Router();

//GET /roman-emperors
router.get("/", function(req, res){
    res.json({response: "You sent me a GET request"});
})

//POST /a roman-emperor
router.post("/", function(req, res){
    res.json({
        response: "You sent me a POST request",
        body: req.body
    });
})

//GET /roman-emperors/"id"
router.get("/:qID", function(req, res){
    res.json({
        response: "You sent me a GET request for a specific ID-" + req.params.qID
    });
})

//POST /roman-emperors
router.post("/:qID/answers", function(req, res){
    res.json({
        response: "You sent me a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
})

//PUT 
router.put("/:qID/answers/:aID", function(req, res){
    res.json({
        response: "You sent me a PUT request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
})

//DELETE 
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({
        response: "You sent me a DELETE request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
    });
})

module.exports = router;