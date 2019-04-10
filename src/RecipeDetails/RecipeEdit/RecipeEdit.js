import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import RecipeNameField from './RecipeNameField'
import RecipeDescriptionField from './RecipeDescriptionField'

import './RecipeEdit.css'

const RecipeEdit = ({ recipe, onSubmit, history }) => {
  useEffect(() => {
    if (!recipe) {
      history.push({ pathname: "/" })
    }
  }, [])

  const goBack = () => {
    history.push({ pathname: `/recipe/${recipe.id}` })
  }

  return (
    <>
      <button className="button back-button" onClick={goBack}>Go Back</button>
      <Formik
        initialValues={{
          name: recipe && recipe.name,
          description: recipe && recipe.description
        }}
        onSubmit={onSubmit}
      >
        <Form className="form">
          <Field component={RecipeNameField} name="name" />
          <Field component={RecipeDescriptionField} name="description" />
          <button type="submit" className="button submit-button">
            Save
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default RecipeEdit;
