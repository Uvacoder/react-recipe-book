import React from 'react'

import './RecipeEdit.css'

const RecipeDescriptionField = ({ field }) => {
  return (
    <textarea className="recipe-input" {...field} placeholder="Recipe name" />
  )
}

export default RecipeDescriptionField;
