import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs, fetchSmurfs } from '../actions';

const SmurfForm = props => {
    const [values, setValues] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurfs(values);
        setValues({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <div>
        <p className='formHeader'><b>Fill the form to add a smurf:</b></p>
        {!props.isPosting ? (
            <form className='formContainer'>
                <input
                label='name'
                type='text'
                name='name'
                placeholder='Name'
                onChange={handleChanges}/>

                <input
                label='age'
                type='text'
                name='age'
                placeholder='Age'
                onChange={handleChanges}/>

                <input 
                label='height'
                type='text'
                name='height'
                placeholder='Height'
                onChange={handleChanges}/>
                <button className='submitBtn btn' onClick={handleSubmit}>Submit Smurf</button>
            </form>
        ) : (
            <h2 className='submitText'>Submitting Smurf...</h2>
        )}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting
    }
}

export default connect(mapStateToProps, { postSmurfs, fetchSmurfs })(SmurfForm);