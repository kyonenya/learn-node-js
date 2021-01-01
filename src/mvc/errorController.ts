import express, { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';

export const logErrors = (err: Error, req: Request, res: Response, next: NextFunction) =>{
  console.error(err.stack);
  next(err);
};

export const respondNoResourceFound = (req: Request, res: Response) => {
  const errCode = httpStatus.NOT_FOUND;
  res.status(errCode);
  res.sendFile('./public/${errCode}.html', { root: './' });
};

export const respondInternalError = (err: Error, req: Request, res: Response, next: NextFunction) =>{
  console.error(err.stack);
  const errCode = httpStatus.INTERNAL_SERVER_ERROR;
  res.status(errCode);
  res.send(`${errCode} | Sorry, our application is experiencing a problem.`);
};
