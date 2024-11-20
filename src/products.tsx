import React from 'react';


const Products: React.FC = () => {
    return(
        <div className='bg-blue-100 p-6 space-x-4 '>
         
                <div className='px-2 p-4 md:px-20 pb-20 space-y-11'>
            <h3 className='text-lg font-semibold'> How it Works</h3>
            
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
        <div className="bg-gray-800 p-6 rounded-lg">
         <img src='/find4.jpg'></img>
         <h3 className='font-bold text-white'>Sign Up</h3>
         <p className='text-white'>signup for free to our services</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
         <img src='/find7.jpg'></img>
         <h3 className='font-bold text-white'>Add your bank account</h3>
         <p className='text-white'>FinTrack has made it easy to track your account</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src='/find3.jpg'></img>
          <h3 className='font-bold text-white'>Start transacting</h3>
          <p className='text-white'>start making transactions easily using FinTrack</p>
        </div>
      </section>
      </div>
            </div>
            
        
    )

}
export default Products;