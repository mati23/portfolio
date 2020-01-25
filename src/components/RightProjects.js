import '../css/rightprojects.css'

import React, { Component } from 'react'

function createThumbnail(imagePath, description, color1, color2) {
    let path = require('../images/' + imagePath)
    return (
        <div className="project-thumbnail">
            <div className='image-thumbnail'>
                <div className='frame'>
                    <img src={path} alt="" />
                    <div className='frame-description'
                        style={{
                            background: "rgb(0,78,40)",
                            background: "linear-gradient(45deg," + color1 + " 0%, " + color2 + " 100%)"
                        }}>
                        {description}
                    </div>
                </div>
            </div>
        </div >
    )
}
class RightProjects extends Component {
    render() {
        return (
            <div className='right-projects'>
                <div className="side-title">
                    {this.props.dataFromParent[localStorage['languages']].sideTitle[1]}
                </div>
                <div className="side-row">
                    {createThumbnail('magnifinance.png', 'Magnifinance', 'rgba(240,101,116, 0.9)', 'rgba(232, 62, 65, 0.9)')}
                    <div className='empty-div'></div>
                </div>
            </div>
        )
    }
}

export default RightProjects
