import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash'

export const getBooks = () => {
  return(dispatch) => {
    axios.get('/api/books')
      .then(res => {
        dispatch({ type: 'GET_BOOKS', books: res.data })
      })
      .catch(err => {
        dispatch({ type: 'SET_HEADERS', headers: err.headers });
        dispatch(setFlash('Failed to Retrieve Lectures', 'red'));
      });
  }
}

