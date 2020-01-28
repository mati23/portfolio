import React, { Component } from 'react'
import '../css/details.css'

const Details = props => {
    console.log(props.location)
    return (
        <div className="details">
            <div className="image-container">

            </div>
            <div className="description-container">
                <div className="title">
                    {props.location.state.name}
                </div>
                <div className="description">
                    dasdkasdlçsakdaslçdk
                </div>

            </div>

        </div>
    )

}
export default Details