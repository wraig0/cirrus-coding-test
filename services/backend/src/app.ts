import express, { Request, Response } from 'express';
import makeData from './db/makeData';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json('Hello World');
});


const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});