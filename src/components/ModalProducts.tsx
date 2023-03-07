import { formatMoney } from "@/helpers"
import { useCafe } from "@/hooks/useCafe"
import Image from "next/image"
import { useEffect, useState } from "react"

export const ModalProducts = () => {

	const [counter, setCounter] = useState(1)
	const [edition, setEdition] = useState(false)
	const { order, product, onChangeModal, onAddNewProduct } = useCafe()

	useEffect(() => {

		if (order.some((orderState) => orderState.id === product.id)) {

			const productEdit = order.find((orderState) => orderState.id === product.id)
			setEdition(true)
			if (typeof productEdit === 'undefined') return
			setCounter(productEdit.counter)
		}

	}, [product, order])


	return (
		<div className="md:flex gap-10">

			<div className="md:w-1/3">
				<Image
					width={300}
					height={400}
					alt={`Product image ${product.name}`}
					src={`/assets/img/${product.image}.jpg`}
				/>
			</div>

			<div className="md:w-2/3">
				<div className="flex justify-end">
					<button onClick={onChangeModal} >
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<h1 className="text-3xl font-bold mt-5" >{product.name}</h1>
				<p className="mt-5 font-black text-5xl text-amber-500">
					{formatMoney(product.price)}
				</p>
				<div className="flex gap-4 mt-5">
					<button
						onClick={() => {

							if (counter < 1) return
							setCounter(counter - 1)
						}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none" viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-7 h-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>

					</button>
					<p className="text-3xl">{counter}</p>
					<button
						onClick={() => {
							if (counter > 6) return
							setCounter(counter + 1)
						}}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor" className="w-7 h-7">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>

					</button>
				</div>
				<button
					className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
					onClick={() => onAddNewProduct({ ...product, counter })}
				>
					{edition ? 'Save changes' : 'Add your order'}
				</button>
			</div>

		</div>
	)
}
