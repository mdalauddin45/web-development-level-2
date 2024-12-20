import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../module/user/user.model';  // Import your User model

// JWT Authentication Middleware
const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers['authorization']?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  jwt.verify(token, 'your_jwt_secret_key', async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Decoding the JWT and fetching user from the database
    const user = await User.findById((decoded as { userId: string }).userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;  // Attach the full user object to the request object
    next();
  });
};

export default authenticateJWT;
