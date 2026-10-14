import React from 'react'

const Card = ({ product, del }) => {
    return (
        <div className='h-100 bg-gray-700/70 rounded-md p-5 flex flex-col justify-between'>
            <div className='h-[70%] w-full p-3'>
                <img className='h-full w-full object-contain' src={product.image} alt="" />
            </div>
            <h4 className='text-[18px] truncate'><span className='font-semibold text-xl'>Title-</span>{product.title}</h4>
            <p className='text-[18px] truncate'><span className='font-semibold text-xl'>Description</span>{product.description}</p>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold tracking-widest'>${product.price}</h2>
                <button
                    onClick={() => del(product.id)}
                    className='bg-red-600 rounded-md px-3 cursor-pointer text-sm font-semibold'>Delete</button>
            </div>
        </div>
    )
}

export default Card