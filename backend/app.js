require('dotenv').config();
const { getUser } = require('./routes/users');
const { dbUser, dbPassword } = require('./db');

console.log("Backend running");

// Demonstrate parameterized query usage without executing against a DB
const { query, params } = getUser("admin");
console.log(query, params);

// Validate env credentials are provided (do not log sensitive values)
if (!dbUser || !dbPassword) {
  console.warn("Database credentials not set in environment.");
}
