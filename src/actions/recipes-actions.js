export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export const addRecipe = () => ({
  type: ADD_RECIPE
});

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  id
});

export const updateRecipe = (id, recipe) => ({
  type: UPDATE_RECIPE,
  id,
  recipe
});
