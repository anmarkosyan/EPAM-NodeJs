/*
1.Create microservice for sending the emails to the client.
2.You should use node mailer package for it.
3.Make sure your code will be written in typescript and you will have nodemon for running the code base.
4.All code base should be written and wrapped with Docker file and docker compose.
5.You should create scheduler to send an email for every 5 minute ( take a look into croon jobs functionality)

*/
import nodemailer from 'nodemailer';

const sendEmail = async () => {
  //1) crate transporter
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //2)define options
  const options = {
    from: 'Anush Markosyan <anush.markos@gmail.com>',
    to: 'anush.muz@gmail.com',
    subject: 'Testing Nodemailer',
    text: 'Hi, this is a Nodemailer test email 🔮 ;) ',
    html: '<b> Hi 😊 </b><br> This is a Nodemailer test email',
  };

  //3)send email
  await transport.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
};

export default sendEmail;
