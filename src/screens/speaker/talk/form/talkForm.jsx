import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'

import Field from 'components/form/field'
import {
  input, markdownInput, radio, SubmitButton, RadioGroup,
} from 'components/form'
import { required } from 'components/form/validators'
import './talkForm.css'

const TalkForm = ({ onSubmit, initialValues, submitting }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit, pristine, invalid, errors }) => (
      <form className="talk-form card">
        <Field name="title" label="Title" type="text" component={input} validate={required} />
        <Field name="abstract" label="Abstract" component={markdownInput} validate={required} />
        <Field name="language" label="Talk language" type="text" component={input} />
        <RadioGroup name="level" label="Level" inline error={errors.level}>
          <Field name="level" value="beginner" label="Beginner" type="radio" component={radio} validate={required} />
          <Field name="level" value="intermediate" label="Intermediate" type="radio" component={radio} validate={required} />
          <Field name="level" value="advanced" label="Advanced" type="radio" component={radio} validate={required} />
        </RadioGroup>
        <Field name="references" label="References" component={markdownInput} />
        <SubmitButton
          handleSubmit={handleSubmit}
          pristine={pristine}
          invalid={invalid}
          submitting={submitting}
        >
          {!initialValues ? 'Create Talk' : 'Save Talk'}
        </SubmitButton>
      </form>
    )}
  </Form>
)

TalkForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitting: PropTypes.bool,
}

TalkForm.defaultProps = {
  initialValues: undefined,
  submitting: false,
}

export default TalkForm
