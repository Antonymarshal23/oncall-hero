import { createClient } from 'redis';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { env } from '../env';

export let redisClient: any;

export const redisLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {
    redisClient = createClient({ url: env.redisUrl, RESP: 2 });
    await redisClient.connect();
    console.log('Redis Connected');
};
