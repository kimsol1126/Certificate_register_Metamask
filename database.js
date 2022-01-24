// 미리 npm install mysql로 설치하기
var mysql = require('mysql');

// 정보를 담을 파일
var db_info = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'mydata'
}

/*
// 넣고 싶은 정보
const info = {
    "uid": '',
    "iid": '',
    "name": '양루연',
    "birth": '2000-07-07',
    "pubkey": ''
}

// 연결되었는지 확인
confirm.connect(function(err){
    if (err) throw err;
    console.log("You are connected");
});

var sql = 'INSERT INTO user_info (user_id, issuer_id, user_name, user_birth, user_pubkey) VALUES (?,?,?,?,?)';
var params = [info['uid'], info['iid'], info['name'], info['birth'], info['pubkey']]
con.query(sql, params, function(err, rows, fields){
    if(err){
        console.log(err);
    } else{
        console.log(rows.name);
    }
});

// 연결 종료
con.end();
*/


module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
