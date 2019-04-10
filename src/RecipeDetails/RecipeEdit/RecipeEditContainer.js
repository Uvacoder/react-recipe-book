import { connect } from 'react-redux';
import RecipeEdit from './RecipeEdit';

import { updateRecipe } from '../../actions/recipes-actions'

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.find(rp => rp.id === parseInt(ownProps.match.params.id))

  return {
    recipe,
  }
}

const mapDispatchToprops = (dispatch, ownProps) => ({
  onSubmit: data => {
    dispatch(updateRecipe(parseInt(ownProps.match.params.id), data))
    ownProps.history.push({ pathname: `/recipe/${ownProps.match.params.id}` })
  }
});

const RecipeEditContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(RecipeEdit)

export default RecipeEditContainer;
