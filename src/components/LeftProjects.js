import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'

function setImage(imagePath, description, color1, color2) {
    let path = require('../images/' + imagePath)
    console.log(path)
    return (
        <div className="project-thumbnail">
            <div className='image-thumbnail'>
                <div className='frame'>
                    <img src={path} alt="" />
                    <div className='frame-description'
                        style={{
                            background: "rgb(0,78,40)",
                            background: "linear-gradient(45deg," + color1 + " 0%, " + color2 + " 100%)"
                        }}
                    >{description}</div>
                </div>
            </div>
        </div >
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
                    {setImage('mask.png', this.props.dataFromParent[localStorage['languages']].artNames[0], 'rgba(100,100,100,0.9)', 'rgba(150,150,150,0.9)')}
                    {setImage('hand.png', this.props.dataFromParent[localStorage['languages']].artNames[1], 'rgba(47,96,20,0.9)', 'rgba(72,117,115,0.9)')}
                    {setImage('house.png', this.props.dataFromParent[localStorage['languages']].artNames[2], 'rgba(59,51,16,0.9)', 'rgba(81,75,75,0.3)')}
                    {setImage('capsule341.jpg', this.props.dataFromParent[localStorage['languages']].artNames[3], 'rgba(50,45,90,0.9)', 'rgba(70,100,124,0.9)')}
                    {setImage('spiderman.jpg', this.props.dataFromParent[localStorage['languages']].artNames[4], 'rgba(115,30,50,0.9)', 'rgba(72,117,115,0.9)')}
                    <div className='empty-div'></div>
                </div>
            </div>
        )
    }
}

export default LeftProjects
