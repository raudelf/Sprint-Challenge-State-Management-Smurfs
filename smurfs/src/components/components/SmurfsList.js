import React from 'react';
import { connect } from 'react-redux';

const SmurfsList = props => {
    return (
        <div className='smurfContainer'>
        {props.error ? (<div className='error'>{props.error}</div>) : (
            props.smurfs.map(smurf => {
                return (<h1>{smurf.name}</h1>)
            })
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SmurfsList);