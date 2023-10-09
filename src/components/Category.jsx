import React from 'react'

const Category = ({allCategories, filterItems}) => {

  return (
    <div className='btn-container'>
        {
            allCategories.map((category, index) =>{
                return (
                    <button className="filter-btn" key={index} onClick={()=>filterItems(category)} >{category}</button>
                )
            })
        }
    </div>
  )
}

export default Category