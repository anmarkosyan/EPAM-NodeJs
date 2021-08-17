import fs, { read } from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const func = function (chunk: string): any {
  console.log(chunk.toString());
};
export const writeFile = (req: Request, res: Response) => {
  const __dirname = path.resolve();
  const writeFilePath = `${__dirname}/src/data/bigData.json`;
  const readFilePath = `${__dirname}/src/data/bigData.txt`;

  const readable = fs.createReadStream(readFilePath);
  readable.setEncoding('utf-8');

  //let str = '';
  readable.on('data', chunk => {
    fs.writeFileSync(writeFilePath, chunk);
    console.log('done!');
  });


    res.status(200).json({
      status: 'success',
      data: 'File is ready!!',
    });

};
