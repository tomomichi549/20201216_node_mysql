const db = require('./lib/db');

const con = db.connect();

let sql = 'UPDATE users SET ? WHWEW ?;;'
let.params = [
    { email: 'test@yokohama.com' },
    { id: 1 },

]
con.query(sq1, params, (err, results) => {
    console.log(sql);
    console.log(results);

});

con.end();