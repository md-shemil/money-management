const express = require('express');
const path = require('path');
const connectDb = require('./conn');
const router = require('./routes/Transactions');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDb();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/transactions', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
