import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from '../actions/recipes-actions'

function recipesReducer(state = [], action) {
  const recipes = [...state]

  switch (action.type) {
    case ADD_RECIPE:
      const initialRecipe = {
        id: state.length,
        name: 'New Recipe',
        description: ''
      }
      recipes.push(initialRecipe)
      return recipes
    case DELETE_RECIPE:
      const index = recipes.findIndex(recipe => recipe.id === action.id)
      recipes.splice(index, 1)
      return recipes
    case UPDATE_RECIPE:
      const updateIndex = recipes.findIndex(recipe => recipe.id === action.id)
      recipes[updateIndex] = {
        id: action.id,
        ...action.recipe
      }
      return recipes
    default:
      return state
  }
}

export default recipesReducer;
