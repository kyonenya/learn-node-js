import express, { Request, Response } from 'express';

export const sendReqParam = (req: Request, res: Response) => {
  const veg = req.params.vagatable;
  res.send(`This is the page for ${veg}`);
};

export const respondWithName = (req: Request, res: Response) => {
  res.render('index'); // index.ejs
}
