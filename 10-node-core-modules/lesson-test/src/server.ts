import { getApp, PORT } from './app';

const server = () => {
  const app = getApp();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  });
};

export default server();
