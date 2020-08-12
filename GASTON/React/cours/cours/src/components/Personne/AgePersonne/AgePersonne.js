import React, { Component } from 'react'

const AgePersonne = (props) => {
    const now = new Date().getFullYear();
    return <div>Age : {props.age} - ({now - props.age})</div>

}

export default AgePersonne;