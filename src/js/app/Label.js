import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'

const Label = ({ type, name, handleChange }) => (
  <label style={{'display': 'block'}}>
    {name}:
    <Input type={type} id={name} handleChange={handleChange}/>
  </label>
)

export default Label

Label.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}