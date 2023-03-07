import { useCafe } from '@/hooks/useCafe'
import { Layout } from '../layout/Layout'
import { ResumeProduct } from '../components/ResumeProduct'
const Resume = () => {

  const { order } = useCafe()
  return (

    <Layout page='Resume'>
      <h1 className='text-4xl font-black'>Resume</h1>
      <p className='text-2xl mt-10' >Check your order </p>
      {
        order.length === 0 ? (
          <p className='text-center text-2xl'>There is no elements in your order</p>
        ) :
          (
            order.map(newOrder => (
              <ResumeProduct
                key={newOrder.id}
                newOrder={newOrder}
              />
            ))
          )

      }
    </Layout>
  )
}

export default Resume