import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-3'>
        <div>
            <img src="./images/site-logo.svg" alt="logo" className='h-16 w-16' />
        </div>
        <div className='flex items-center'>
            <h1 className='font-semibold  text-2xl'>DSA Revision</h1>
        </div>
    </div>
  )
}

export default Header
