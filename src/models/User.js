

import { Schema, model } from "mongoose";
import bcrypt  from "bcrypt";

const saltRound = 10;

const userSchema = new Schema({
    email: String,
    password: String
})

// Before Save To schema. 
userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, saltRound);

    this.password = hash;
})

const User = model('User', userSchema);

export default User;