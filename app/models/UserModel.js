import mongoose, { version } from "mongoose";

const UserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    name: {type: String, required:true},
},
{
    timestamps: true,
    versionKey: false,
}
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;