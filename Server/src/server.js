import express from 'express';
import cors from 'cors';
import notificationRoute from './routes/firebaseRoute.js';


const app = express();
const port = 3000;

app.use(cors({
 origin:['http://localhost:5173'],
 methods:['GET', 'POST', 'PUT', 'DELETE','PATCH'],
 allowedHeaders:['Content-Type', 'Authorization','Accept'],
 credentials:true
}));
app.use(express.json());

// app.get('/', (req, res) => {
//  res.send('Hello World!');
// });
app.use('/api/firebase',notificationRoute);
app.listen(port, () => {
console.log(`Example app listening on port: ${port}`);
});
