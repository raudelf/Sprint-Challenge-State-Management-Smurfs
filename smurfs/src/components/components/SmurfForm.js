import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions';

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
            <button onClick={handleSubmit}>Submit Smurf</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);