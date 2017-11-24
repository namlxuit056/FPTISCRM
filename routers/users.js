var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongojs = require('mongojs');
var db = mongojs('mongodb://namlxuit:0566265426@ds259855.mlab.com:59855/dbcrmfptis',['users']);
//get all units
router.get('/users', function(req, res, next){
    if(req.user){
    db.users.find(function(err,users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
} else {
    return res.status(401).json({ message: 'Unauthorized user!' });
}
    
})

//get single  user
router.get('/users/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,unit){
        if(err){
            res.send(err);
        }
        res.json(unit);
    })
});

//creat
router.post('/users',function(req, res, next) {
    if (req.user) {
      next();
      console.log('post thanh cong');
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  });
router.post('/auth/login', function(req, res) {
    
      // find the user
      db.users.findOne({
        username: req.body.username,
        userpassword:req.body.userpassword
      }, function(err, user) {
    
        if (err) throw err;
    
        if (!user ) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
    
          // check if password matches
          if (user.userpassword != req.body.userpassword) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
        
           return res.json({
             success:"true",
             username:user.username,
             token:jwt.sign({username:user.username, fullName:user.fullName,_id: user._id},'RESTFULAPIs')
            })
          }
        }
      });
    });
    module.exports = router;