// import mongoose, { Document, Schema } from 'mongoose';

// interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
// }

// const UserSchema: Schema = new Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model<IUser>('User', UserSchema);

// export default User;

// models/User.ts

import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  characters: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  username: String,
  password: String,
  characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
});

export default model<IUser>('User', userSchema);