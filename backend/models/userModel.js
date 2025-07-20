import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Add a Name!"]
    },
    email:{
        type: String,
        required: [true, "Please Add an Email!"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please Add a Password!"]
    },
    name:{
        type: String,
        required: [true, "Please Add a Name!"]
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User