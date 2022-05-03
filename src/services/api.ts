import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public/comics?';
const publicKey = '8ac0abb561fd80419a9d620e5dacab05';
const privateKey = '4c906d30265626ee9951279156f5746f381e9807';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);
const uri = baseUrl + "ts=" + time + "&apikey=" + publicKey + "&hash=" + hash;

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    }
});

export default api;