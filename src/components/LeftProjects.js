import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Spring } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'
import Thumbnail from './Thumbnail'



const LeftProjects = props => {
    return (
        <div className='left-projects' >
            <div className="side-title">
                {props.dataFromParent[localStorage['languages']].sideTitle[0]}
            </div>
            <div className="side-row">
                <Thumbnail objectStyle={{ imagePath: 'hand.png', description: props.dataFromParent[localStorage['languages']].artNames[0], color1: "#ff0000", color2: "#00ff00" }} />

                <div className='empty-div'></div>
            </div>
        </div>
    )

}

export default LeftProjects
