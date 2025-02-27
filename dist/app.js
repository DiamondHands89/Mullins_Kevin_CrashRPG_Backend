"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
mongoose_1.default.connect;
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import userRoutes from '../routes/userRoutes';
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(bodyParser.json());
// app.use('/api', userRoutes);
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mydatabase')
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
