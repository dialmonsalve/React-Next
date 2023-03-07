
import { Product } from '@/interfaces';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {

	const products = await prisma.product.findMany({
		where: {
			categoryId: 1,
		}
	});
	res.status(200).json(products)
}
