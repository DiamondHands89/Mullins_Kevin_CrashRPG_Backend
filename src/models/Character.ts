// models/Character.ts
import { Schema, model, Document } from 'mongoose';

interface IStats extends Document {
  health: number;
  mana: number;
  strength: number;
  agility: number;
}

interface ICharacter extends Document {
  name: string;
  class: string;
  level: number;
  stats: IStats;
}

const statsSchema = new Schema<IStats>({
  health: Number,
  mana: Number,
  strength: Number,
  agility: Number,
});

const characterSchema = new Schema<ICharacter>({
  name: String,
  class: String,
  level: Number,
  stats: statsSchema,
});

export default model<ICharacter>('Character', characterSchema);