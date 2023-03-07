import { useState, useEffect, createContext, ReactNode } from "react";
import axios from "axios";
import { Category, Product } from "@/interfaces";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export interface NewOrder extends Omit<Product, "categoryId"> {
	categoryId?: number;
	counter: number
}



interface CafeContextProps {
	categories: Category[];
	currentCategory: Category;
	modal: boolean;
	name: string;
	order: NewOrder[];
	product: Product;
	total: number;
	onAddNewProduct: ({ image, categoryId, ...product }: NewOrder) => void;
	onCategoryClick: (id: number) => void;
	onChangeModal: () => void;
	onDeleteProduct: (id: number) => void;
	onEditAmount: (id: number) => void;
	onSetProduct: (product: Product) => void;
	pushOrder: (e: React.FormEvent) => void;
	setName: (name: string) => void;
}

export const CafeContext = createContext({} as CafeContextProps)


interface Props {
	children: ReactNode;
}

export const CafeProvider = ({ children }: Props) => {

	const [categories, setCategories] = useState<Category[]>([]);
	const [currentCategory, setCurrentCategory] = useState({} as Category)
	const [product, setProduct] = useState({} as Product)
	const [modal, setModal] = useState(false)
	const [order, setOrder] = useState<NewOrder[]>([])
	const [name, setName] = useState<string>('')
	const [total, setTotal] = useState<number>(0)

	const router = useRouter()

	useEffect(() => {
		getCategory();
	}, [])

	useEffect(() => {
		setCurrentCategory(categories[0])
	}, [categories])

	useEffect(() => {
		const newTotal = order.reduce((total, product) => (product.price * product.counter) + total, 0)

		setTotal(newTotal)
	}, [order])



	const getCategory = async () => {
		const { data } = await axios('/api/categories')

		setCategories(data)
	}

	const onCategoryClick = (id: number) => {
		const category = categories.filter(cat => cat.id === id)

		setCurrentCategory(category[0])
		router.push('/')
	}

	const onSetProduct = (product: Product) => {
		setProduct(product)
	}

	const onChangeModal = () => {
		setModal(!modal)
	}


	const onAddNewProduct = ({ categoryId, ...product }: NewOrder) => {

		if (order.some(productState => productState.id === product.id)) {

			const orderUpdate = order.map(productState => productState.id === product.id ? product : productState)

			setOrder(orderUpdate)
			toast.success('Saving...')
		} else {
			setOrder([...order, product]);
			toast.success('Order add')
		}

		setModal(false)
	}

	const onEditAmount = (id: number) => {

		const productUpdate = order.filter(pr => pr.id === id)

		setProduct(productUpdate[0] as Product)
		setModal(!modal)

	}

	const onDeleteProduct = (id: number) => {

		const orderUpdate = order.filter(prod => prod.id !== id)

		setOrder(orderUpdate)

	}

	const pushOrder = async (e: React.FormEvent) => {
		e.preventDefault()

		try {

			await axios.post('/api/orders', { order, name, total, date: Date.now().toString() })

			setCurrentCategory({} as Category);
			setOrder([]);
			setName('');
			setTotal(0);

			toast.success('Order done correctly')

			setTimeout(() => {
				router.push('/')
			}, 3000)

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<CafeContext.Provider value={{
			categories,
			currentCategory,
			modal,
			order,
			product,
			total,
			onAddNewProduct,
			onCategoryClick,
			onChangeModal,
			onSetProduct,
			onEditAmount,
			onDeleteProduct,
			name,
			setName,
			pushOrder

		}} >
			{children}

		</CafeContext.Provider>
	)
}
