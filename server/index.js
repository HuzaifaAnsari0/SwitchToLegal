const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const connectDB = require('./src/db');
const serviceRoutes = require('./src/routes/serviceRoutes');
const serviceInfoRoutes = require('./src/routes/serviceInfoRoutes');

connectDB();
app.use(cors({
  origin: ["https://switchtolegal.com", "http://localhost:5173",'*']
}));
app.use(express.json());

// Routes
app.use('/', serviceRoutes);
app.use('/', serviceInfoRoutes);

app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
});