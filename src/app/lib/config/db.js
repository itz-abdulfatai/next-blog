import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abdulmaster:A6du12oos@cluster0.27day.mongodb.net/next-blog')
    console.log("db connected")
}