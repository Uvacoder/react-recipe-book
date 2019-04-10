import React, { useEffect } from 'react';

import './RecipeDetails.css'

const RecipeDetails = ({ recipe, deleteRecipe, history }) => {
  useEffect(() => {
    if (!recipe) {
      history.push({ pathname: "/" })
    }
  }, [])

  return (
    <div>
      {recipe ?
        <>
          <button className="delete-button" onClick={deleteRecipe}>Delete Recipe</button>
          <h1>{recipe.name}</h1>
          <h2>{recipe.id}</h2>
        </>
        : null}
    </div>
  )
}

export default RecipeDetails;
