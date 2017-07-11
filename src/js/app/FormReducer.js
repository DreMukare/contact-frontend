import { SET } from './FormActions'

const INIT_STATE = {
  user: {
    name: null,
    email: null,
    phone: null,
    postition: null,
    company: null,
    location: null,
    website: null,
    socials: null
  }
}

export default function reducer (state=INIT_STATE, action) {
  switch (action.type) {
    case SET: {
      return {...state, user: action.payload}
    }
  }

  return state
}