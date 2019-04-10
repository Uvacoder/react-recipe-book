import React from 'react';
import { Route } from 'react-router-dom';

import RecipeBookContainer from './RecipeBook/RecipeBookContainer';
import RecipeDetailsContainer from './RecipeDetails/RecipeDetailsContainer'
import RecipeEditContainer from './RecipeDetails/RecipeEdit/RecipeEditContainer'

const Layout = () => {
  return (
    <div className="Layout">
      <Route exact path="/" component={RecipeBookContainer} />
      <Route path="/recipe/:id" component={RecipeDetailsContainer} />
      <Route path="/recipe/edit/:id" component={RecipeEditContainer} />
    </div>
  );
}

export default Layout;
