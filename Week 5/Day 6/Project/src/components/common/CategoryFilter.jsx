import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetCategoriesQuery } from '../../features/products/productApi'
import { setCategory } from '../../features/ui/uiSlice'
import { motion } from 'framer-motion'

const CategoryFilter = () => {

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.ui.selectedCategory)
  const { data: categories = [], isLoading, isError, error } = useGetCategoriesQuery()
  const theme = useSelector((state) => state.theme.mode)

  if (isLoading) {
    return <h2 className='font-bold text-2xl m-10'>Loading Categories...</h2>
  }

  if (isError) {
    return <h2 className='font-bold text-2xl m-10'>{error.error}</h2>
  }

  return (
    <motion.div className='flex flex-wrap gap-3 m-4 ml-6'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button onClick={() => dispatch(setCategory("all"))}
        className={`px-4 py-2 font-semibold cursor-pointer active:scale-90 transition rounded-lg shadow-md ${selectedCategory === "all" ? "bg-blue-500 text-white" : `${theme === "light" ? "bg-gray-500" : "bg-gray-200 text-black"}`}`}
      >All</button>
      {
        categories.map(category => (
          <button key={category} onClick={() => dispatch(setCategory(category))}
            className={`px-4 py-2 cursor-pointer font-semibold active:scale-90 transition rounded-lg shadow-md ${selectedCategory === category ? "bg-blue-500 text-white" : `${theme === "light" ? "bg-gray-500" : "bg-gray-200 text-black"}`}`}
          >{category}</button>
        ))
      }
    </motion.div>
  )
}

export default CategoryFilter
