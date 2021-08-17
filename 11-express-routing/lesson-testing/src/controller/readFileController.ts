import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';


export const readFile = (req: Request, res: Response) => {
  const __dirname = path.resolve();
  const filePath = `${__dirname}/src/data/bigData.txt`;

   fs.createReadStream(filePath).pipe(
    res.status(200).json({
      status: 'success',
      message: 'Reading text is done 🎉',
    })
  );
};
