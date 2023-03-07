
import { useRouter } from 'next/router'

interface Steps {
	step: number;
	name: string;
	url: string
}
const steps: Steps[] = [
	{ step: 1, name: 'Menu', url: '/' },
	{ step: 2, name: 'Resume', url: '/resume' },
	{ step: 3, name: 'Data and total', url: '/total' },
]

export const Steps = () => {


	const router = useRouter()

	const calculateProgress = () => {

		let value;
		switch (router.pathname) {
			case '/':
				value = 2;
				break;
			case '/resume':
				value = 50;
				break;
			default:
				value = 100;
		}
		return value

	}
	return (
		<>
			<div className="flex justify-between mb-5">
				{steps.map(step => (

					<button
						onClick={() => {
							router.push(step.url);
						}}
						key={step.step}
						className="text-2xl font-bold"
					>
						{step.name}
					</button>
				))}
			</div>
			<div className='bg-gray-100 mb-10'>
				<div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white'
					style={{ width: `${calculateProgress()}%` }}
				>

				</div>
			</div>
		</>
	)
}
