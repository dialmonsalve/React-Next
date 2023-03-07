import { NewOrder } from '@/context/CafeProvider';
import { Order, PrismaClient, Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface MyNextApiRequest<T> extends NextApiRequest {
	body: T;
}

interface CustomOrderWhereInput extends Omit<Prisma.OrderWhereInput, 'select' | 'include'> {
	status?: boolean;
}

interface Req {
	name: string;
	total: number;
	order: NewOrder[];
	date: string;
	status: boolean
}
export default async function handler(req: MyNextApiRequest<Req>, res: NextApiResponse<Order[] | Order>) {

	const prisma = new PrismaClient()

	//Get orders
	const orders = await prisma.order.findMany({
		where: {
			status: false,
		} as CustomOrderWhereInput,
	});
	res.status(200).json(orders)


	// Create a orders
	if (req.method === 'POST') {

		console.log(req.body);

		const order = await prisma.order.create({
			data: {
				name: req.body.name,
				total: req.body.total,
				order: JSON.stringify(req.body.order),
				date: req.body.date
			}
		})
		console.log(order);


		res.status(200).json(order)
	}

}
