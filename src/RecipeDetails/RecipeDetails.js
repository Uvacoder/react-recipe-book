import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './RecipeDetails.css'

const RecipeDetails = ({ recipe, deleteRecipe, history }) => {
  useEffect(() => {
    if (!recipe) {
      goBack()
    }
  }, [])

  const goBack = () => {
    history.push({ pathname: "/" })
  }

  return (
    <div>
      {recipe ?
        <>
          <button className="button back-button" onClick={goBack}>Go Back</button>
          <h1 className="recipe-title">{recipe.name}</h1>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-buttons">
            <Link className="button edit-button" to={`/recipe/edit/${recipe.id}`}>Edit</Link>
            <button className="button delete-button" onClick={deleteRecipe}>Delete</button>
          </div>
        </>
        : null}
    </div>
  )
}

export default RecipeDetails;
