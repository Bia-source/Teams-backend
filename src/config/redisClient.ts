import { createClient } from 'redis';

export const clientRedis = createClient({
    url: process.env.URL_REDIS_CACHE,
});

clientRedis.on('connect', ()=> console.log("Redis connected!"));
clientRedis.on('error', (err) => console.error('Redis Client Error:', err));

(async () => {
    try {
        await clientRedis.connect();
    } catch (error) {
        console.error('Erro ao recuperar erros do Redis:', error);
    }
})();


