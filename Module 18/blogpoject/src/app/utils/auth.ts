import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { id: string; email: string; role: string | undefined; }, 
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
