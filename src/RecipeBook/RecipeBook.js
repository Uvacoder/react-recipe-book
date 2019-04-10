import React from 'react';

import './RecipeBook.css'
import RecipeCard from './RecipeCard/RecipeCard';

const RecipeBook = ({ recipes, addRecipe }) => {
  return (
    <div className="recipe-book-wrapper">
      <section className="recipe-list">
        {recipes.length > 0 ? recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
          : <h1 className="no-recipes-message">No recipies found</h1>}
      </section>
      <button className="add-button" onClick={addRecipe}>Add new recipe</button>
    </div>
  )
}

export default RecipeBook;
