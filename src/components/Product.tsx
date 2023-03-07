import { formatMoney } from "@/helpers"
import { useCafe } from "@/hooks/useCafe"
import { Product as Pr } from "@/interfaces"
import Image from "next/image"

interface Props {
	product: Pr
}
export const Product = ({ product }: Props) => {

	const { onSetProduct, onChangeModal } = useCafe()
	const { name, image, price } = product

	return (
		<div className="border p-3">
			<Image src={`/assets/img/${image}.jpg`}
				alt={`Image ${name}`}
				width={400}
				height={500} />
			<div className="p-5">
				<h3 className="text-2xl font-bold" >{name}</h3>
				<p className="mt-5 font-black text-4xl text-amber-500" >
					{formatMoney(price)}
				</p>
				<button
					className="bg-indigo-600 w-full mt-5 p-3 uppercase font-bold"
					onClick={() => {
						onChangeModal();
						onSetProduct(product);
					}}
				>
					Add
				</button>
			</div>
		</div>
	)
}
