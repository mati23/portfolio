import React, { Component } from 'react'
import '../css/details.css'

const Details = props => {
    console.log(props.location)
    return (
        <div className="details">
            <div className="image-container">

            </div>
            <div className="description-container">
                {props.location.state.name}
            </div>

        </div>
    )

}
export default Details