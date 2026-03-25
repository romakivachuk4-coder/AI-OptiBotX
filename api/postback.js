import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).send('No ID');

    // Сохраняем ID в базу данных
    await kv.set(`user:${user_id}`, 'active');
    return res.status(200).send('OK');
}
