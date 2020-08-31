import { Schema, model } from "mongoose";

const schema = new Schema({
  username: { type: String, required: true } ,
  name: { type: String, required: true } ,
  lastname: { type: String, required: true } ,
  email: { type: String, required: true }
}, { versionKey: false });

const User = model('User', schema);

export default User;