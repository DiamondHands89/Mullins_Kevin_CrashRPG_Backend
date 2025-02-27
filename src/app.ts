// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());

// mongoose.connect

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});