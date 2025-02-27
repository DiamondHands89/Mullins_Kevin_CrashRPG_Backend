import { Request, Response, NextFunction } from 'express';
import '../types/express'; // Import the extended Request interface
import { verifyToken } from '../utils/jwt';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access Denied: No Token Provided!');
  }

  try {
    const payload = verifyToken(token);
    req.user = payload; // Attach the payload to the request object
    next();
  } catch (error) {
    res.status(401).send('Invalid Token');
  }
};
