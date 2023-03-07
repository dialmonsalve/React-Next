import Image from "next/image";
import { useCafe } from "@/hooks/useCafe";
import { Category } from "./Category";

export const Sidebar = () => {

	const { categories } = useCafe()

	return (
		<>
			<Image
				width={300}
				height={150}
				src="/assets/img/logo.svg"
				alt="logo image"
			/>

			<nav className="mt-10">
				{categories.map((category) => (
					<Category
						key={category.id}
						category={category} />
				))}
			</nav>

		</>
	)
}
