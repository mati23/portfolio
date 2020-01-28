import React, { Component } from 'react'
import '../css/details.css'

const Details = props => {
    let path = props.location.state.folderName
    console.log(path)
    const images = {
        first: require('../images/description/capsule341/1.jpg'),
        second: require('../images/description/capsule341/2.jpg'),
        third: require('../images/description/capsule341/3.jpg')
    }
    return (
        <div className="details">
            <div className="image-container">
                <div className="detail-image">
                    <img src={images.second} alt="" />
                </div>
                <div className="image-container-row">
                    <div className="detail-image">
                        <img src={images.first} alt="" className="small" />
                    </div>
                    <div className="detail-image">
                        <img src={images.third} alt="" className="small" />
                    </div>
                </div>

            </div>
            <div className="description-container">
                <div className="title">
                    {props.location.state.name}
                </div>
                <div className="description" dangerouslySetInnerHTML={{ __html: props.location.state.description }}>

                </div>

            </div>

        </div>
    )

}
export default Details