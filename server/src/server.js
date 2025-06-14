import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({
  path: "./.env"
})

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Allow JSON requests

// API Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
