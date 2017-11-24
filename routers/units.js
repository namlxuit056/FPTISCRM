var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://namlxuit:0566265426@ds259855.mlab.com:59855/dbcrmfptis',['units']);

//get all units
router.get('/units', function(req, res, next){
    db.units.find(function(err,units){
        if(err){
            res.send(err);
        }
        res.json(units);
    })
})

//get single  units
router.get('/units/:id', function(req, res, next){
    db.units.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,unit){
        if(err){
            res.send(err);
        }
        res.json(unit);
    })
})

//save unit
router.post('/unit', function(req, res, next){
    var unit = req.body;
    if(!unit.title || !(unit.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad data"
        })
    } else{
        db.tasks.save(unit, function(err, unit){
            if(err){
                res.send(err);
            }
            res.json(unit);
        })
    }
});

//Delete unit
router.delete('/unit/:id', function(req, res, next){
    db.units.remove({_id: mongojs.ObjectId(req.params.id)},function(err,unit){
        if(err){
            res.send(err);
        }
        res.json(unit);
    })
})

//Update unit
router.put('/unit/:id', function(req, res, next){
    var unit = req.body;
    var updunit = {};
    if(unit.isDone){
        updTask.isDone = unit.isDone;
    }
    if(unit.title){
        updTask.title = unit.title;
    }
    if(!updTask){
        res.status(400);
        res.json({"error": "Bad Data"});
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updtask,{},function(err,unit){
            if(err){
                res.send(err);
            }
            res.json(unit);
        })
    }
    
})
module.exports = router;