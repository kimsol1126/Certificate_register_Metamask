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

// 넣고 싶은 정보
const info = {
    "name": '김솔',
    "birth": '1999-11-26',
    "pubkey": ''
}

// 연결되었는지 확인
/*conn.connect(function(err){
    if (err) throw err;
    console.log("You are connected");
});*/

var sql = 'INSERT INTO user_info (user_name, user_birth, user_pubkey) VALUES (?,?,?)';
var params = [info['name'], info['birth'], info['pubkey']]
conn.query(sql, params, function(err, rows, fields){
    if(err){
        console.log(err);
    } else{
        console.log(rows.name);
    }
});

// 연결 종료
conn.end();
