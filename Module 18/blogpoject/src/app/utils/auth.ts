import jwt from 'jsonwebtoken';
export const createToken = (
  jwtPayload: { id: string; email: string; role: string; password: string }, 
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
