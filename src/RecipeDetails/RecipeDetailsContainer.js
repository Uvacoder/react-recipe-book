import { connect } from 'react-redux';
import RecipeDetails from './RecipeDetails';
import { deleteRecipe } from '../actions/recipes-actions'

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.find(rp => rp.id === parseInt(ownProps.match.params.id))

  return {
    recipe,
    recipies: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteRecipe: () => {
    dispatch(deleteRecipe(parseInt(ownProps.match.params.id)))
    ownProps.history.push({ pathname: "/" })
  }
})

const RecipeDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetails)

export default RecipeDetailsContainer;
