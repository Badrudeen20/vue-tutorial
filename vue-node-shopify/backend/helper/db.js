import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
const connectDB = async (DATABASE_URL,DB_NAME) => {
  try {
    const DB_OPTIONS = {
      dbName:DB_NAME,
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log('Connected Successfully..');
  } catch (err) {
    console.log(err);
  }
}

export default connectDB