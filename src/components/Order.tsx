import { formatMoney } from '@/helpers'
import axios from 'axios'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Order as OrderProps, Product } from '../interfaces'

interface Props {
	orders: OrderProps
}
export const Order = ({ orders }: Props) => {

	const { id, name, order, total } = orders

	const onCompleteOrder = async () => {

		try {
			await axios.post(`/api/orders/${id}`)
			toast.success('Order already')

		} catch (error) {
			toast.error('There is a error')
		}
	}

	const orderArray: Product[] = JSON.parse(order);

	return (
		<div className='border p-10 space-y-5'>
			<h3 className='text-2xl font-bold'>Order: {id}</h3>
			<p className='text-lg font-bold'>Costumer: {name}</p>

			<div>
				{
					orderArray.map(food => (
						<div
							key={food.id}
							className='py-3 flex border-b last-of-type:border-0 items-center' >
							<div>
								<Image
									width={100}
									height={120}
									src={`/assets/img/${food.image}.jpg`}
									alt={`Food Image ${food.name}`}
								/>
							</div>
							<div className='p-5 space-y-2' >
								<h4 className='text-xl font-bold text-amber-500'>
									{food.name}
								</h4>
								<p className='text-lg font-bold' >Count: {food.counter}</p>


							</div>
						</div>
					))
				}
			</div>
			<div className='md:flex md:items-center md:justify-between my-10'>
				<p className='mt-5 font-black text-4xl text-amber-500'>
					Total to pay: {formatMoney(total)}
				</p>
				<button className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-2 px-5 uppercase font-bold rounded-lg'
					onClick={onCompleteOrder}

				>
					Complete Order
				</button>
			</div>
		</div>

	)
}
