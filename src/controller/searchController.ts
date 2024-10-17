import { Request, Response } from 'express';
import ytmusic from '../configs/ytmusic';

const search = async (req: Request, res: Response) => {
  const q = req.query.q;
  try {
    const result = (await ytmusic).search(q, 'song');
    res.status(200).send(await result);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { search };
