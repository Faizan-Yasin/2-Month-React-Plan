import React from 'react'

const Spinner = () => {
  return (
    <div className='flex h-screen justify-center items-center py-6'>
      <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
    </div>
  )
}

export default Spinner
