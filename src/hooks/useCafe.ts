import { CafeContext } from '@/context/CafeProvider'
import {useContext} from 'react'


export const useCafe = () => {
	return useContext(CafeContext)
}
