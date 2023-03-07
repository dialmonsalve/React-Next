import { ReactNode } from 'react';
import Head from 'next/head'
import { Sidebar } from '@/components/Sidebar';
import { Steps } from '@/components/Steps';
import Modal from '@/components/Modal';
import { useCafe } from '@/hooks/useCafe';
import { ModalProducts } from '@/components/ModalProducts';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface Props {
	children: ReactNode;
	page: string
}

export const Layout = ({ children, page }: Props) => {

	const { modal } = useCafe()

	return (
		<>
			<Head>
				<title>Cafe - {page}</title>
				<meta name='description' content='app Coffee Store' />
			</Head>

			<div className="md:flex">
				<aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
					<Sidebar />
				</aside>

				<main className='md:w-8/12  xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
					<div className='p-10'>
						<Steps/>
						{children}
					</div>
				</main>
			</div>
			{modal && (

				<Modal
					isOpen={modal}

				>
					<ModalProducts />
				</Modal>
			)}

			<ToastContainer/>


		</>
	)
}
