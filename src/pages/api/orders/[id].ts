
import { Category, Product } from '@/interfaces';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const prisma = new PrismaClient()

	if (req.method === 'POST') {

		const { id }:any = req.query
		if (!id) {
			return res.status(400).json({ message: 'ID parameter is missing' });
		}


		const orderUpdated = await prisma.order.update({
			where: {
				id: parseInt(id)
			},
			data: {
				status: true
			}as any
		})
		res.status(200).json(orderUpdated)


	}
}