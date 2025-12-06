import { Request, Response, NextFunction } from 'express';
import { login } from '../services/authService';

export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    const result = await login(email, password);

    return res.status(200).json(result);
  } catch (err: any) {
    if (err instanceof Error && err.message === 'INVALID_CREDENTIALS') {
      return res
        .status(401)
        .json({ message: 'Invalid email or password' });
    }

    // ostalo ide na global error handler (kad ga dodamo)
    return next(err);
  }
}
