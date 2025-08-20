import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {children}
    </div>
  )
}

export default Wrapper