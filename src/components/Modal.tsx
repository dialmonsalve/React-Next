import { ReactNode } from "react";

interface Props {
	children: ReactNode
	isOpen: boolean
}

const Modal = ({ children, isOpen }: Props) => {

	if (!isOpen) return null

	return (
		<div className="contain-modal">
			<div
				className="modal"
			>
				{children}
			</div>

		</div>

	);
};

export default Modal;
