// INTENTIONAL SQL INJECTION FOR TRAINING
function getUser(name){
  return `SELECT * FROM users WHERE name = '${name}'`;
}
module.exports = { getUser };
