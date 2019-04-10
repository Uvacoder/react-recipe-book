import React from 'react'

import './RecipeEdit.css'

const RecipeDescriptionField = ({ field }) => {
  return (
    <textarea className="recipe-input" {...field} placeholder="Recipe description" />
  )
}

export default RecipeDescriptionField;
