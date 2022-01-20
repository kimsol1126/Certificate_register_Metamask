let express = require('express');
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser')
let db = require('./database.js');
let conn = db.init();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});

conn.connect(function(err){
    if (err) throw err;
    console.log('Connected');
})
