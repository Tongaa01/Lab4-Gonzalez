import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    name: {type: String, required: true},
    bio: {type: String},
    birthday: {type: Date, required: true},
    nationality: {type: String, required: true},
    books: {type: mongoose.Schema.Types.ObjectId, ref: "Book"},
})

export const Author = mongoose.model("Author", authorSchema)