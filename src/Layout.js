import React from 'react';
import { Route } from 'react-router-dom';

import RecipeBookContainer from './RecipeBook/RecipeBookContainer';
import RecipeDetailsContainer from './RecipeDetails/RecipeDetailsContainer'

const Layout = () => {
  return (
    <div className="Layout">
      <Route exact path="/" component={RecipeBookContainer} />
      <Route path="/recipe/:id" component={RecipeDetailsContainer} />
    </div>
  );
}

export default Layout;
