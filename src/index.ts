import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(cors());

app.listen(port, () => console.log('Server started at http://localhost:5000'));
