import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

export const writeFile = (req: Request, res: Response) => {
  const __dirname = path.resolve();
  const readFilePath = `${__dirname}/src/data/bigData.txt`;
  const writeFilePath = `${__dirname}/src/data/bigData.json`;
  const readFile = fs.readFileSync(readFilePath, 'utf-8');

  const arr = readFile.split('\n');
  const obj:Record<string, any>  = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('.') || arr[i].includes('=')) {
      const inxStart = arr[i].lastIndexOf('.');
      const index = arr[i].indexOf('=');

      const key = arr[i].slice(inxStart + 1, index);
      const value = arr[i].slice(index + 1);

      if (!obj[key]) {
        obj[key] = value;
      }
    }
  }
  const data = [obj];
  fs.writeFile(writeFilePath, JSON.stringify(data), err => {
    if (err) throw err;
    res.status(201).json({
      status: 'success',
      data,
    });
  });
};
