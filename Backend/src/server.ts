import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors'
import path from 'path'

import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server erro.'
    })

})

app.listen(3333, () => console.log('Servidor online'))