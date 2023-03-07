import useSWR from 'swr'
import AdminLayout from "@/layout/AdminLayout";
import axios from 'axios';
import { Order as OrderProps } from '../interfaces';
import { Order } from '@/components/Order';

export const Admin = () => {

	const fetcher = (): Promise<OrderProps[]> => axios('/api/orders').then((data) => data.data)

	const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 })

	return (
		<AdminLayout page="Admin">
			<h1 className='text-4xl font-black'>Admin Panel</h1>
			<p className='text-2xl mt-10' >Admin your orders </p>
			{
				data && data.length ? data.map(order => (
					<Order key={order.id} orders={order} />
				)) : <p>There no orders</p>
			}


		</AdminLayout>
	)
}

export default Admin;
