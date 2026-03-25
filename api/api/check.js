import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const { id } = req.query;
    const status = await kv.get(`user:${id}`);
    res.status(200).json({ active: status === 'active' });
}
