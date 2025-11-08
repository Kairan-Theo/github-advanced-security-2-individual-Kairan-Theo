const { getUser } = require('./routes/users');
console.log("Backend running");
console.log(getUser("admin"));
