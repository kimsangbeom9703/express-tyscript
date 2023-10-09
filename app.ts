import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('typescript - express!!!!');
});

app.listen('3000', () => {
    console.log(`Server listening on port: 3000`);
});