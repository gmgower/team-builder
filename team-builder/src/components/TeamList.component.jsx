import React from 'react'

const TeamList = (props) => {
    console.log(props)
    const {person} = props
    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Role: {person.role}</p>

        </div>
    )
}

export default TeamList;
