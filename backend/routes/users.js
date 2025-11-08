// Use parameterized query to prevent SQL injection
function getUser(name) {
  const query = "SELECT * FROM users WHERE name = ?";
  const params = [name];
  return { query, params };
}

module.exports = { getUser };
