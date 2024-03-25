import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Init Setup
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/airs')
    .then(() => { console.log("database is connected!!") })
    .catch((err) => { console.log(err) })

app.use(morgan('dev'))

//** multi-origin communication */
const corsOptions = {
    origin: 'http://localhost:3000', //vite: 5173, React: 3000
};
app.use(cors(corsOptions));

//Routing
import aiRoute from './routes/ai.js';
app.use('/api/ai', aiRoute)


app.listen(8000, () => {
    console.log('server is live on port 8000')
})