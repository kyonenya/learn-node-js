import express, { Request, Response } from 'express';
import path from 'path';

export const sendReqParam = (req: Request, res: Response) => {
  const veg = req.params.vagatable;
  res.send(`This is the page for ${veg}`);
};

export const respondWithName = (req: Request, res: Response) => {
  const name = req.params.myName;
  res.render('index', { name });
}

export const sendPost = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Post successful!');
};

export const sendIndexHtml = (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
};
