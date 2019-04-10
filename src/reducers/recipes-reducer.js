import { ADD_RECIPE, DELETE_RECIPE } from '../actions/recipes-actions'

function recipesReducer(state = [], action) {
  const recipes = [...state]

  switch (action.type) {
    case ADD_RECIPE:
      const initialRecipe = {
        id: state.length,
        name: 'New Recipe'
      }
      recipes.push(initialRecipe)
      return recipes
    case DELETE_RECIPE:
      const index = recipes.findIndex(recipe => recipe.id === action.id)
      console.log("Index of the recipe", index);
      console.log(action.id)
      recipes.splice(index, 1)
      return recipes
    default:
      return state
  }
}

export default recipesReducer;
