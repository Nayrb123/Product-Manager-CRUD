var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bp.json());

require('./server/routes')(app);

app.listen(8000, function(){
    console.log("Listening on port 8000")
})