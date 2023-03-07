export interface Category {
	id: number;
	icon: string;
	name: string;
	products:Product[]
}

export interface Product {
	id: number;
	name: string;
	image?: string | null;
	categoryId: number;
	price: number;
	counter?:number
}

export interface Order {
	id:number;
	name:string;
	date:string;
	total:number;
	order: string;
	status:boolean;

}
