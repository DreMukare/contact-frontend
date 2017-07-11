import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, id, handleChange }) => (
  <input
    type={type}
    name={id}
    id={id}
    placeholder={id}
    onChange={e => handleChange(e, id)}
  />
)

export default Input

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}