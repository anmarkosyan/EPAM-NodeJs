import { NextFunction, Request, Response } from 'express';

//check update body middleware
export const checkBody = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, subject, message } = req.body;
  if (!(name && email && subject && message)) {
    return res.status(400).json({
      status: 'Bad request!',
      message: 'Fill all required fields for success process!',
    });
  }

  next();
};
