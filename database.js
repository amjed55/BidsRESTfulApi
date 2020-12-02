var sqlite3 = require('sqlite3').verbose()

//connect database
let db = new sqlite3.Database('./db/bids.db', (err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('\n***Connected to database***\n\n')
});

//export database
module.exports = { db };