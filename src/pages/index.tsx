import { Product } from '@/components/Product';
import { useCafe } from '@/hooks/useCafe';
import { Layout } from '@/layout/Layout';


export default function Home() {

  const { currentCategory } = useCafe()


  return (

    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className='text-2xl my-10'>
        Choice and custom your order
      </p>
      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {
          currentCategory?.products?.map(product => (
            <Product
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </Layout>


  )
}
