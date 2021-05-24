import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import config from './config.mjs';
import userRoute from './routes/userRoute.mjs'
import uploadRouter from './routes/uploadRouter.mjs';
import path from 'path';
import productRoute from './routes/productRoute.mjs';
import orderRoute from './routes/orderRoute.mjs';
dotenv.config();



const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.catch((error) => console.log(error.reason));
const app =  express();
app.use(express.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.use('/api/products', productRoute);
app.use('/api/uploads', uploadRouter);
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get('/', (req,res)=>{
    res.send('Server is ready')
})

const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Listening on Port : ${PORT}`);
  });