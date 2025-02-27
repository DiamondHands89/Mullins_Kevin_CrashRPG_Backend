"use strict";
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.json());
// mongoose.connect
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/api', userRoutes_1.default);
// Connect to MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
