import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Тут ви можете додати логіку для входу користувача
    // Наприклад, відправити запит на ваш бекенд або перевірити дані в базі даних

    // Для прикладу, ми просто повернемо успішну відповідь
    res.status(200).json({ message: 'User logged in successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}