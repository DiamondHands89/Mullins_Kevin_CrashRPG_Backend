import jwt from 'jsonwebtoken';
import config from '../config';

interface Payload {
  id: string;
  email: string;
}

export const generateToken = (payload: Payload): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

export const verifyToken = (token: string): Payload => {
  return jwt.verify(token, config.jwtSecret) as Payload;
};
