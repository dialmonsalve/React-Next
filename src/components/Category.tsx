import Image from "next/image"
import { Category as Cat } from "@/interfaces"
import { useCafe } from "@/hooks/useCafe"

interface Props {
	category: Cat
}
export const Category = ({ category }: Props) => {

	const { currentCategory, onCategoryClick } = useCafe()

	const { name, icon, id } = category
	return (
		<div 
			className={`${
				currentCategory?.id === id ? 'bg-amber-400' : ''} 
				flex items-center gap-4 w-full border p-5 hover:bg-amber-400`} 
		>
			<Image
				width={45}
				height={45}
				src={`/assets/img/icono_${icon}.svg`}
				alt="icon-image"/>
			<button
				className="text-2xl font-bold hover:cursor-pointer"
				onClick={()=>onCategoryClick(id)}
			>
				{name}
			</button>
		</div>
	)
}
