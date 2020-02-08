import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfBtn = props => {
    const handleGetSmurf = e => {
        e.preventDefault();
        props.fetchSmurfs();
    }

    return (
        <div className='loadContainer'>
            {props.isFetching ? (<h2 className='fetchText'>Loading Smurfs...</h2>) : (<button className='loadBtn btn' onClick={handleGetSmurf}>Load Smurfs</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfBtn);