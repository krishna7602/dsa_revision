import React from 'react'

const Body2 = () => {
  return (
    <>
        <div className='flex items-center justify-center font-bold text-2xl lg:text-6xl my-10'>
            <h1>What's Included</h1>
        </div>
        <div className='p-10 lg:flex'>
            <div >
                <img src="./images/dsa-2.png" alt="dsa" />
            </div>
            <div className='py-5 md:flex md:justify-center md:gap-16 lg:flex flex-wrap'>
                <ul className='list-disc'>
                    <li className='md:text-2xl '>15+ algo patterns discussed</li>
                    <li className='md:text-2xl'>Detailed solutions and explanations</li>
                    <li className='md:text-2xl'>Awesome resources, articles, blogs</li>
                    <li className='md:text-2xl'>Visualizers and animations included</li>
                    <li className='md:text-2xl'>100 pages of quality content</li>
                    <li className='md:text-2xl'>Concepts explained for beginners</li>
                    <li className='md:text-2xl'>All in one revision guide</li>
                </ul>
                <div className='flex justify-center py-5'>
                    <button className='bg-amber-500 p-3 rounded-xl hover:bg-emerald-400 md:text-2xl lg:p-1'>Download for <b>FREE</b></button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Body2
