import '@/styles/globals.css'
import '../styles/modal.css';

import type { AppProps } from 'next/app';
import { CafeProvider } from '@/context/CafeProvider';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CafeProvider>
            <Component {...pageProps} />
        </CafeProvider>
    )
}
