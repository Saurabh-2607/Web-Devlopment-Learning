const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";  // Use this password for both signing and verification

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat Singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman Singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya Kumari",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

// POST /signin route
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Check if user exists
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory DB",
    });
  }

  // Sign JWT using the correct jwtPassword
  const token = jwt.sign({ username: username }, jwtPassword);  // Correct secret key used here
  return res.json({
    token,
  });
});

// GET /users route (requires token authorization)
app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({
      msg: "Token is required",
    });
  }

  try {
    // Verify token using the correct jwtPassword
    const decoded = jwt.verify(token, jwtPassword);  // Correct secret key used here
    const username = decoded.username;

    // Return a list of users excluding the authenticated user
    const otherUsers = ALL_USERS.filter(user => user.username !== username);
    return res.json(otherUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
