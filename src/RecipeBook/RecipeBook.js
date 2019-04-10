import React from 'react';

import './RecipeBook.css'
import RecipeCard from './RecipeCard/RecipeCard';

const RecipeBook = ({ recipes, addRecipe }) => {
  return (
    <div className="recipe-book-wrapper">
      <section className="recipe-list">
        {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </section>
      <button className="add-button" onClick={addRecipe}>Add new recipe</button>
    </div>
  )
}

export default RecipeBook;
