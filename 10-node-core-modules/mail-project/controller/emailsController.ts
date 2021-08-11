import express, { Application, Request, Response, NextFunction } from 'express';
import cron from 'node-cron';
import sendEmail from '../utils/email';


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

export const getAllEmails = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const getEmail = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const createEmail = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const updateEmail = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const deleteEmail = (req: Request, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

export const sendEmailController = (req: Request, res: Response) => {
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  try {
    cron.schedule('*/5 * * * * ', async function () {
      await sendEmail({
        email,
        subject,
        message,
      });
    });

    res.status(200).json({
      status: 'success',
      data: {
        message: 'Your mail is successfully send, check it, please ☝️',
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};
