import React from 'react'
import Card from '../components/Card'
import { womens } from '../utils/data'

const Women = () => {
  console.log(womens)
  return (
    <div className='w-full p-12 flex  mx-auto'>
        <div className=' flex mx-auto gap-8'>
            {womens.map((product, index) => {
              return (
                <Card img={product.image} key={index} index={index} name={product.productName} price={product.productPrice} />
              )
            })}
            
        </div>
    </div>
  )
}

export default Women