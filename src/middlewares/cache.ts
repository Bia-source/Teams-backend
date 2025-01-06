import { Request, Response, NextFunction } from 'express';
import { clientRedis } from '../config/redisClient';

export async function cacheErrors(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const key = `error:${req.originalUrl}`;

        const originalSend = res.send;

        res.send = function (body: any): Response {
            if (res.statusCode >= 400) {
                clientRedis.setEx(key, 172800, JSON.stringify({
                    status: res.statusCode,
                    error: body,
                }));
            }

            return originalSend.call(this, body);
        };

        next();
    } catch (error) {
        next(error);
    }
}

export async function getCachedError(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
         const keys = await clientRedis.keys('error:*');

         const errors = await Promise.all(
             keys.map(async (key) => ({
                 key,
                 value: await clientRedis.get(key),
             }))
         );
 
         if(errors){
            console.log('Erros armazenados no Redis:', errors);
            return res.json({errors})
         }
        
         next();
    } catch (error) {
        next(error);
    }
}

