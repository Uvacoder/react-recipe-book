import { connect } from 'react-redux';
import RecipeBook from './RecipeBook'
import { addRecipe } from '../actions/recipes-actions'

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: () => dispatch(addRecipe())
  }
}

const RecipeBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeBook);

export default RecipeBookContainer;
