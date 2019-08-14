import React from 'react'

import TeamList from './TeamList.component'



const TeamCard = (props) => {
    console.log(props)
    // const {person} = props
    return (
        <div>
            <p>{props.person.name}</p>
            <p>{props.person.email}</p>
            <p>{props.person.role}</p>
        </div>
    )
}

export default TeamCard
