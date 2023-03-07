import { formatMoney } from '@/helpers';
import { useCafe } from '@/hooks/useCafe';
import { useEffect, useCallback } from 'react';
import { Layout } from '../layout/Layout';

const Total = () => {

	const { order, name, setName, pushOrder, total } = useCafe()

	const probeOrder = useCallback(() => {
		return order.length === 0 || name === '' || name.length < 3
	}, [order, name])

	useEffect(() => {
		probeOrder();
	}, [order, probeOrder]);

	return (

		<Layout page='Total and confirm you order'>
			<h1 className='text-4xl font-black'>Resume</h1>
			<p className='text-2xl mt-10' >Confirm your order</p>

			<form onSubmit={pushOrder}>
				<div>
					<label
						htmlFor='name'
						className='block uppercase text-slate-800 font-bold text-xl'
					>
						Name
					</label>
					<input
						id='name'
						type="text"
						className='bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md'
						value={name}
						onChange={(e) => { setName(e.target.value) }}
					/>

					<div className='mt-5'>
						<p className='text-2xl'>Total to pay: {''}
							<span className='font-bold' >
								{formatMoney(total)}
							</span>
						</p>
					</div>
				</div>
				<div className='mt-5'>
					<input
						disabled={probeOrder()}
						type="submit"
						className={`${probeOrder() ? 'bg-gray-300' : 'bg-indigo-600 hover:cursor-pointer hover:bg-indigo-800'}  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center `}
						value="Confirm your order"
					/>
				</div>
			</form>
		</Layout>
	)
}

export default Total