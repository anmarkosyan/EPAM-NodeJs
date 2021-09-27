//===================  fibonacci CPU-bound problem =================
//import { fork } from 'child_process';
//import path from 'path';
import { createServer, IncomingMessage, ServerResponse } from 'http';
//import fibonacci from './fibonacci';
const fibonacciWorker = require('./fibonacci-worker');

const port = 3000;

const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    const url: string = req.url!;
    const baseURL = `https://${req.headers.host}/`;
    const reqUrl = new URL(url, baseURL);
    const { pathname } = reqUrl;
    console.log('Incoming request to:', req.url);

    if (pathname === '/fibonacci') {
      const n = Number(reqUrl.searchParams.get('n'));
      //❗️ child_process
      //const childProcess = fork(path.join(__dirname, 'fibonacci-fork'));
      // childProcess.on('message', msg => {
      //   res.writeHead(200, { 'Content-type': 'text/html' });
      //   return res.end(msg.toString());
      // });
      //
      // childProcess.send(n);

      //❗️ worker-threads
      const result = await fibonacciWorker(n);
      res.writeHead(200, { 'Content-type': 'text/html' });
      return res.end(result);
    } else {
      res.writeHead(200, { 'Content-type': 'text/html' });
      return res.end('Hello World!');
    }
  }
);
server.listen(port, () => console.log(`Listening on port ${port}...`));
