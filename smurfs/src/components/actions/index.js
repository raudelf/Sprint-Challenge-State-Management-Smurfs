import axios from 'axios';
import { bindActionCreators } from 'redux';

// Actions
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const POST_SUCCESS = 'POST_SUCCESS';
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

export const postSmurfs = smurfs => dispatch => {
    dispatch({ type: POST_SMURFS});
    setTimeout(() => {
        axios
            .post('http://localhost:3333/smurfs', smurfs)
            .then(res => {
                console.log('Actions > postSmurfs > Data: ', res);
                dispatch({ type: POST_SUCCESS, payload: res})
            })
            .catch(err => {
                console.log('Actions > postSmurfs > Error: ', err);
                dispatch({ type: ERROR, payload: 'There was an issue submitting your Smurf'})
            })
    })
}