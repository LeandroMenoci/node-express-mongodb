import mongoose from "mongoose";

mongoose.connect('mongodb+srv://aluraleandro:123@alura.0w2ae84.mongodb.net/alura')

let db = mongoose.connection

export default db