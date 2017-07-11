import { connect } from 'react-redux'
import stateful from 'react-purely-stateful'

import { set } from './FormActions'

import Form from './Form'

const mapStateToProps = state => ({
  data: state
})

const mapSetStateToProps = setState => ({
  handleChange: (e, id) => {
  	e.preventDefault()
    setState({ [id]: e.target.value })
  }
})

const mapStateToDispatch = dispatch => ({
  handleSubmit: (e, data) => {
  	e.preventDefault()
  	dispatch(set(data))
  }
})

const FormComponent = stateful(
  mapStateToProps,
  mapSetStateToProps
)(Form)

const FormContainer = connect(
	mapStateToProps,
	mapStateToDispatch
)(FormComponent)

export default FormContainer
