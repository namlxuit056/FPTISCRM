express = require('express');
path = require('path');
bodyParser = require('body-parser');


index = require('./routers/index');
units = require('./routers/units');
users = require('./routers/users');
employee = require('./routers/employee');
var cors = require('cors');

var port = process.env.PORT || 3000;
app = express();

jsonwebtoken = require("jsonwebtoken");

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use('/assets',express.static(path.join(__dirname, '/assets')));

//Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
  });
//cors
app.use(cors());
app.use('/', index);
app.use('/api', units);
app.use('/api',users);
app.use('/api',employee);

app.listen(port, function(){
    console.log('Server started port  '+ port);
})