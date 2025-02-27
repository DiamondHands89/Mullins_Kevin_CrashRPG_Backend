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