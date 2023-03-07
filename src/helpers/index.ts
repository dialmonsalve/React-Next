
export const formatMoney = (count: number) => {
	return count.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})
}
