import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const readFile = (req: Request, res: Response) => {
  const __dirname = path.resolve();

  const readFileStream = fs.createReadStream(
    `${__dirname}/src/data/bigData.txt`
  );

  readFileStream.pipe(
    res.status(200).json({
      status: 'success',
      message: 'Reading text is done🎉',
    })
  );
};
