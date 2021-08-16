import express, { Application, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

export const readFile = (req: Request, res: Response, next: NextFunction) => {
  const __dirname = path.resolve();
  const readFileStream = fs.createReadStream(
    path.join(__dirname, 'src', 'data', 'bigFile.txt'),
    {
      highWaterMark: 9,
    }
  );

  readFileStream.setEncoding('utf-8');
  let out = '';
  readFileStream.on('data', chunk => {
    out += chunk;
  });

  readFileStream.on('end', () => {
    res.status(200).json({
      status: 'success',
      data: 'Reading file is done!',
    });
  });
};
