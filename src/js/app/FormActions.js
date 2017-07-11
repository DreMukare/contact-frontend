export const SET = 'SET'

export function set(data) {
  return {
    type: SET,
    payload: data
  }
}