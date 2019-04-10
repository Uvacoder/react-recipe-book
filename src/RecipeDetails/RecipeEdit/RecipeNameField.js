import React from 'react'

import './RecipeEdit.css'

const RecipeNameField = ({ field }) => {
  return (
    <input className="recipe-input" {...field} placeholder="Recipe name" />
  )
}

export default RecipeNameField;
