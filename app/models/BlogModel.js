import mongoose, { version } from "mongoose";

const BlogSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false },
    deadline: { type: Date },
    owner: { type: mongoose.Schema.Types.ObjectId, required:true, ref: "users" },
}, {
    timestamps: true,
    versionKey: false,
});

const BlogModel = mongoose.model('blogs', BlogSchema);

export default BlogModel;