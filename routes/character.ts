import { Router, Request, Response } from 'express';
import Character from '../src/models/Character';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const character = new Character(req.body);
  await character.save();
  res.status(201).json(character);
});

router.get('/:id', async (req: Request, res: Response) => {
  const character = await Character.findById(req.params.id);
  res.status(200).json(character);
});

export default router;