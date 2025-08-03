import mongoose from "mongoose";
import 'dotenv/config.js'

const connectDB = ()=>{

  mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));
}

export default connectDB