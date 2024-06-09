import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.routes';

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running ${port}`)
})