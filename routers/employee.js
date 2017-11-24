var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://namlxuit:0566265426@ds259855.mlab.com:59855/dbcrmfptis',['employees']);

//get all employees
router.get('/employees', function(req, res, next){
    console.log("get all employees");
    db.employees.find(function(err,employees){
        if(err){
            res.send(err);
        }
        res.json(employees);
    })
})

//get single  employees
router.get('/employee/:id', function(req, res, next){
    console.log("get employee by id");
    db.employees.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,employee){
        if(err){
            res.send(err);
        }
        res.json(employee);
    })
})

//save employee
router.post('/employee', function(req, res, next){
    console.log("create employee");
    var employee = req.body;
    if(!employee.idEmployee){
        res.status(400);
        res.json({
            "error": "Bad data"
        })
    } else{
        db.employees.save(employee, function(err, employee){
            if(err){
                res.send(err);
            }
            res.json(employee);
        })
    }
});

//Delete employee
router.delete('/employee/:id', function(req, res, next){
    console.log("delete employee by id");
    db.employees.remove({_id: mongojs.ObjectId(req.params.id)},function(err,employee){
        if(err){
            res.send(err);
        }
        res.json(employee);
    })
})

//Update employee
router.put('/employee/:id', function(req, res, next){
    console.log("update employee by id");
    var employee = req.body;
    var editEmployee = {};
    /* check all properties null
     */
    //change name
    if(employee.fullName){
        editEmployee.fullName = employee.fullName;
    }
    //change gender
    else if(employee.gender){
        editEmployee.gender = employee.gender;
    }
    else if(employee.position){
        editEmployee.position = employee.position;
    }
    else if(employee.department){
        editEmployee.department = employee.department;
    }
    else if(employee.part){
        editEmployee.part = employee.part;
    }
    else if(employee.part){
        editEmployee.dateOfBirth = employee.part;
    }
    else if(employee.address){
        editEmployee.address = employee.address;
    }
    else if(employee.email){
    editEmployee.email = employee.email;
    }
    else if(employee.phoneNumber){
    editEmployee.phoneNumber = employee.phoneNumber;}
 

    if(!editEmployee){
        res.status(400);
        res.json({"error": "Bad Data"});
    } else {
        db.employees.update({_id: mongojs.ObjectId(req.params.id)},editEmployee,{},function(err,employee){
            if(err){
                res.send(err);
            }
            res.json(employee);
        })
    }
    
})
module.exports = router;