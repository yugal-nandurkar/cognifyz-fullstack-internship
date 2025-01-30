// cache/redisClient.js
const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient({
    url: process.env.REDIS_URL
});

client.connect().catch(console.error);

module.exports = {
    client,
    getAsync: promisify(client.get).bind(client),
    setAsync: promisify(client.set).bind(client),
    delAsync: promisify(client.del).bind(client)
};