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























// import { Router, Request, Response } from 'express';
// import Character from '../models/Character';

// const router = Router();

// router.get('/', async (req: Request, res: Response) => {
//   try {
//     const characters = await Character.find();
//     return res.json(characters);
//   } catch (error) {
//     console.error('Error in GET /characters:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // You can add additional character route handlers (POST, PUT, DELETE) here.

// export default router;
