import React from 'react'

function ProductCard() {
  return (
    <div className='bg-slate-50 rounded-md shadow-md'>
        <div>
            <img src="/image 1.png" alt="Product Image" className='mx-auto' />
        </div>
        <div className='bg-white text-start p-4 rounded-b-md'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2 className='text-green-500'>$90.99</h2>
        </div>
    </div>
  )
}

export default ProductCard