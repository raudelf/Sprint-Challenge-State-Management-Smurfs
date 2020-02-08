import axios from 'axios';

// Actions
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS});
    setTimeout(() => {
        axios
          .get('http://localhost:3333/smurfs')
          .then(res => {
              console.log('Actions > fetchSmurfs > Data: ', res);
              dispatch({ type: UPDATE_SMURFS, payload: res.data})
          })
          .catch(err => {
              console.log('Actions > fetchSmurfs > Error: ', err)
              dispatch({ type: ERROR, payload: 'There was an issue retrieving Smurfs'})
            });
    }, 2000)
}