import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const user = process.env.EMAIL_USERNAME;
console.log(typeof user);



const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


const options = {
  from: '"Anush Markosyan" <anush.markos@gmail.com>',
  to: 'anush.muz@gmail.com',
  subject: 'Testing Nodemailer',
  text: 'Hi, this is a Nodemailer test email ;) ',
  html: '<b> Hi </b><br> this is a Nodemailer test email',
};

transport.sendMail(options, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
