var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var calculations = require('./routes/calculations');
var index = require('./routes/index');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

app.use('/calc', calculations);
app.use('/', index);

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
