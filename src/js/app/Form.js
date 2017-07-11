import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'

const Form = ({ data, handleSubmit, handleChange }) => {
  const fields = [
    'name', 'email', 'phone', 'position',  'company', 'location',
    'website'
  ].map(field =>
    <Label 
      key={field} 
      type={field !== 'email' || 'password' ? 'text' : field } 
      name={field} 
      handleChange={handleChange}
    />
  )

  return (
    <form onSubmit={e => handleSubmit(e, data)}>
      {fields}
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}