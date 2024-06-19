import express, { Application } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { LoopsClient } from "loops";
import newsletter from './newsletters/newsletter';

const app: Application = express();
const port = 3000;

const loops = new LoopsClient(process.env.LOOPS_KEY ?? "");

app.use(express.json());
newsletter(app, loops);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
