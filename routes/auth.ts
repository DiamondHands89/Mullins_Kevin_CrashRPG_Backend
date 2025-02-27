import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../src/models/User';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  const user = new User(req.body);
  await user.save();
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
  res.status(201).json({ token });
});

export default router;

























// import { Router, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import User from '../src/models/User';

// const router = Router();

// router.post('/register', async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       return res.status(400).json({ message: 'Username and password are required.' });
//     }

//     // Check if the user already exists.
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(409).json({ message: 'User already exists.' });
//     }

//     // Create a new user (in production, password hashing is needed).
//     const newUser = new User({ username, password });
//     await newUser.save();

//     // Generate a token.
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     return res.status(201).json({ token });
//   } catch (error) {
//     console.error('Error in /register:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// router.post('/login', async (req: Request, res: Response) => {
//   try {
//     const { username, password } = req.body;
//     if (!username || !password) {
//       return res.status(400).json({ message: 'Please provide both username and password.' });
//     }

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ message: 'User not found.' });
//     }
//     if (user.password !== password) {
//       return res.status(401).json({ message: 'Invalid credentials.' });
//     }

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
//     return res.json({ token });
//   } catch (error) {
//     console.error('Error in /login:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// export default router;