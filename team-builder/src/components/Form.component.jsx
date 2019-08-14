import React, { useState } from 'react'




const Form = (props) => {
const [person, setPerson] = useState({name: '', email: '', role: ''})

    const changeHandler = event => {
        // set____ Method
        setPerson({...person, [event.target.name]: event.target.value});
    }

    return (
        <form>   
            <h1>Team Member Sign Up</h1>         
            <input 
                placeholder='name' 
                value={person.name} 
                name='name'
                onChange={changeHandler}
                />

            <input 
                placeholder='email' 
                value={person.email} 
                name='email' 
                onChange={changeHandler}
                /> 

            <input 
                placeholder='role' 
                value={person.role} 
                name='role'
                onChange={changeHandler}
                /> 
        </form>
    )
}

export default Form
