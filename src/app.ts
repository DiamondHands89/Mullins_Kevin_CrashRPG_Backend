// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import userRoutes from '../routes/userRoutes';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGODB_URI!)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));


// // Routes
// app.use('/api/characters', require('./routes/character'));
// app.use('/api/auth', require('./routes/auth'));

// app.use(bodyParser.json());
// app.use('/api', userRoutes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Mount routes
// Assuming your routes for characters and auth are exported correctly
import characterRouter from '../routes/character';
import authRouter from '../routes/auth';

app.use('/characters', characterRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;