import { Request, Response, Router } from 'express';

const auth = (req: Request, res: Response) => {
  res.send('Hello, World');
};

export { auth };
