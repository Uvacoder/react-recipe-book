import React from 'react';
import { Link } from 'react-router-dom'

import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="card-wrapper">
        <h1 className="card-title">{recipe.name}</h1>
      </div>
    </Link>
  )
}


export default RecipeCard;
