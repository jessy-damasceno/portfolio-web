import jwt from 'jsonwebtoken'
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'my_secret';

export default function tokenGenerator(email: string): string {
  const token = jwt.sign({ email }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return token;
};
