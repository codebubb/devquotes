import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.send('Test CI');
});

app.listen(9002);