import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'

function setImage(imagePath, description) {
    let path = require('../images/' + imagePath)
    console.log(path)
    return (
        <div className="project-thumbnail">
            <div className='image-thumbnail'>
                <div className="frame">
                    <img src={path} alt="" />
                </div>
                <div className='frame-description'>{description}</div>
            </div>
        </div>
    )
}
class LeftProjects extends Component {
    render() {
        return (
            <div className='left-projects'>
                <div className="side-title">
                    {this.props.dataFromParent[localStorage['languages']].sideTitle[0]}
                </div>
                <div className="side-row">
                    {setImage('mask.png', 'History Prediction')}
                    {setImage('hand.png', 'Time and Money')}
                    {setImage('house.png', 'Haunted House')}
                    {setImage('capsule341.jpg', 'Capsule 341')}
                    {setImage('spiderman.jpg', 'Spider-Man')}
                    <div className='empty-div'></div>
                </div>
            </div>
        )
    }
}

export default LeftProjects
