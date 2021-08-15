import { Request, Response } from 'express';
import cron from 'node-cron';
import sendEmail from '../utils/email';

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
