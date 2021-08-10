import dotenv from 'dotenv';
import cron from 'node-cron';
import sendEmail from './email';

dotenv.config();

cron.schedule('5 * * * * ', async function () {
  await sendEmail();
});
