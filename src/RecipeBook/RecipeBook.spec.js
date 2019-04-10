import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import RecipeBook from './RecipeBook';
import recipeReducer from '../reducers/recipes-reducer'

describe("[UNIT] RecipeBook component", () => {
  const initialRecipes = [{
    id: 1,
    name: "New Recipe"
  }]

  const initialState = {
    recipes: initialRecipes
  }

  const reducer = combineReducers({
    recipes: recipeReducer
  })

  const store = createStore(reducer, initialState, applyMiddleware(thunk))

  const history = createMemoryHistory({ initialEntries: ["/"] });

  const renderRecipeBook = () => {
    return render(
      <Provider store={store}>
        <Router history={history}>
          <RecipeBook recipes={initialRecipes} />
        </Router>
      </Provider>
    )
  }

  afterEach(cleanup);

  it("should render a recipe in our list", () => {
    const { getByText } = renderRecipeBook();
    expect(getByText("New Recipe")).toBeDefined();
  });

  // TODO: Test Redux store
});
