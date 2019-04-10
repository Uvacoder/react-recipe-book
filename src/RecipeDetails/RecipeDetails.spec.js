import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import RecipeDetails from './RecipeDetails';

describe("[UNIT] RecipeDetails component", () => {
  const initialRecipe = {
    id: 1,
    name: "My Awesome Recipe"
  }

  const history = createMemoryHistory({ initialEntries: ["/"] });

  const renderRecipeDetails = () => {
    return render(
      <Router history={history}>
        <RecipeDetails recipe={initialRecipe} />
      </Router>
    )
  }

  afterEach(cleanup);

  it("should render the recipe's title", () => {
    const { getByText } = renderRecipeDetails();
    expect(getByText("My Awesome Recipe")).toBeDefined();
  });
});
