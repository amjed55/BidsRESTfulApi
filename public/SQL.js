//SQL query to display data where STATUS = open. Tried to get it order by ClosingDate.
let sql = "SELECT * FROM Data WHERE STATUS = 'Open' ORDER BY datetime(ClosingDate) DESC;"

//Export sql variable
module.exports = { sql };