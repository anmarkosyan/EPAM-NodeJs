import dotenv from 'dotenv';
import app from './app';
dotenv.config({ path: './.env' });

const port = process.env.PORT || 3000;

const server = () => {
  app.listen(port, () => {
    console.log(`Running port on ${port}...`);
  });
};

//central place to handle all UNHANDLED PROMISE REJECTIONS,catch  form anywhere in the application
// process.on('unhandledRejection', err:{} => {
//   console.log(err.name, err.message);
//   process.exit(1);
// })
server();
