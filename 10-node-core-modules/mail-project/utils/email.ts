import nodemailer from 'nodemailer';

const sendEmail = async (options: {
  email: string;
  subject: string;
  message: string;
}) => {
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
  const mailOptions = {
    from: 'Anush Markosyan <anush.markos@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3)send email
  await transport.sendMail(mailOptions);
};

export default sendEmail;
