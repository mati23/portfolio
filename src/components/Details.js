import React, { Component } from 'react'
import '../css/details.css'
import image from '../images/description/capsule341/1.jpg'

const Details = props => {
    console.log(props.location.state.folderName)
    let path = {
        first: '../images/description/' + props.location.state.folderName + '/1.jpg',
        second: '../images/description/' + props.location.state.folderName + '/2.jpg',
        third: '../images/description/' + props.location.state.folderName + '/3.jpg'
    }



    return (
        <div className="details">
            <div className="image-container">
                <div className="detail-image">
                    <img src={`${path.first}`} alt="" />
                </div>
                <div className="image-container-row">
                    <div className="small">
                        <img src={`${path.second}`} alt="" />
                    </div>
                    <div className="small">
                        <img src={`${path.third}`} alt="" />
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