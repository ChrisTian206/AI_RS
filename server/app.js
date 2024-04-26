import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv'

//Init Setup
//import mongoose from 'mongoose';
const app = express();
dotenv.config()

// mongoose.connect('mongodb://127.0.0.1:27017/airs')
//     .then(() => { console.log("database is connected!!") })
//     .catch((err) => { console.log(err) })

app.use(morgan('dev'))
app.use(express.json())

//** multi-origin communication */
const corsOptions = {
    origin: ['*'] //For Dev: vite: 5173, React: 3000
};

app.use(cors());

//Routing
import aiRoutes from './routes/ai.js';
import listingRoutes from './routes/listing.js'
app.use('/api/ai', aiRoutes)
app.use('/api/listings', listingRoutes)


app.listen(8000, () => {
    //console.log('server is live on port 8000')
})