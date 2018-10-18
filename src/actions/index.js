export const REQUEST_HISTORY = 'REQUEST_HISTORY'
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY'

export const requestHistory = () => ({
  type: REQUEST_HISTORY
})

export const receiveHistory = (json) => ({
  type: RECEIVE_HISTORY,
  items: json
})

export const fetchHistoryItems = () => dispatch => {
  dispatch(requestHistory())
  return fetch('http://localhost:3030/history')
    .then(response => response.json())
    .then(json => {
      return dispatch(receiveHistory(json))
    })
}
