const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Myntra Clone API!');
});

// Authentication endpoints

// User registration
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    // You need to implement the JWT token generation logic here
    // For example, you can use a library like jsonwebtoken

    const token = generateToken(user); // Replace with your token generation logic

    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// User logout
app.get('/api/auth/logout', (req, res) => {
  // Implement your logout logic here
  // For example, clearing the user session or token
  res.status(200).json({ message: 'User logged out successfully' });
});

// User session management (optional)
app.get('/api/auth/session', (req, res) => {
  // Implement your session management logic here
  // For example, checking if the user session is still valid
  res.status(200).json({ message: 'User session active' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function generateToken(user) {
  // Implement your token generation logic here
  // For example, you can use the `jsonwebtoken` library

  // Generate a token with user information
  const token = jwt.sign({ username: user.username, id: user._id }, 'secret_key');
  return token;
}
