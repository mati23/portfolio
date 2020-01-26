import '../css/rightprojects.css'

import React, { Component } from 'react'
import Thumbnail from './Thumbnail'


const RightProjects = props => {

    return (
        <div className='right-projects'>
            <div className="side-title">
                {props.dataFromParent[localStorage['languages']].sideTitle[1]}
            </div>
            <div className="side-row">
                <Thumbnail objectStyle={{ imagePath: 'magnifinance.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[0], color1: "#BB1C3B", color2: "#B91C14" }} />
                <Thumbnail objectStyle={{ imagePath: 'blender.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[1], color1: "#E1872F", color2: "#025283" }} />
                <Thumbnail objectStyle={{ imagePath: 'kaynan.jpeg', description: props.dataFromParent[localStorage['languages']].codeProjectNames[2], color1: "#505050", color2: "#FFCC22" }} />
                <Thumbnail objectStyle={{ imagePath: 'loading.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[3], color1: "#007f74", color2: "#60e0d3" }} />
                <div className='empty-div'></div>
            </div>
        </div >
    )

}

export default RightProjects
