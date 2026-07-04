import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Api funcionando')
})

console.log('tá rodando')


export default app;