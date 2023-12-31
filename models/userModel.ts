import mongoose from "mongoose";
const {Schema} = mongoose;

export const userSchema = new Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

mongoose.model("users", userSchema);