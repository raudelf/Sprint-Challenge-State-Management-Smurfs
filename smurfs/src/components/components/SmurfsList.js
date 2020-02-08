import React from 'react';
import { connect } from 'react-redux';

const SmurfsList = props => {
    return (
        <div className='smurfContainer'>
        {props.error ? (<div className='error'>{props.error}</div>) : (
            props.smurfs.map((smurf, index) => {
                return (
                    <div className='smurfBox' key={index}>
                        <h3>{smurf.name}</h3>
                        <p><b>Age:</b> {smurf.age}</p>
                        <p><b>Height:</b> {smurf.height}</p>
                    </div>)
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