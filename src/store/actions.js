import axios from 'axios'

export const loadDataRequest = () => ({ type: 'LOAD_DATA_REQUEST' })

export const loadDataSuccess = (data) => ({ type: 'LOAD_DATA_SUCCESS', data })

export const loadDataError = () => ({ type: 'LOAD_DATA_ERROR' })

export const loadData = () => {
  return dispatch => {
    dispatch(loadDataRequest())
    axios
      .get('http://httpbin.org/ip')
      .then(({data}) => dispatch(loadDataSuccess(data)))
      .catch(() => dispatch(loadDataError()))
  }
}
