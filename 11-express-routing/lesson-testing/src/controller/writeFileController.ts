import express, { Application, Request, Response, NextFunction } from 'express';

export const writeFile = (req:Request, res:Response, next:NextFunction) => {
  res.status(200).json({
    status: 'success',
    data: 'File is ready!!',
  });

};