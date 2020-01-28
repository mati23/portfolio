import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Spring } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'
import Thumbnail from './Thumbnail'



const LeftProjects = props => {
    let thumbnails = [
        {
            name: 'capsule341',
            description: 'blabla'
        },
        {
            name: 'hand',
            description: 'blabla2'
        }
    ]
    return (
        <div className='left-projects' >
            <div className="side-title">
                {props.dataFromParent[localStorage['languages']].sideTitle[0]}
            </div>
            <div className="side-row">
                <Thumbnail objectStyle={{ imagePath: 'capsule341.jpg', description: props.dataFromParent[localStorage['languages']].artNames[0], thumbnail: thumbnails[0], color1: "#425269", color2: "#304055" }} />
                <Thumbnail objectStyle={{ imagePath: 'mask.png', description: props.dataFromParent[localStorage['languages']].artNames[1], thumbnail: thumbnails[0], color1: "#2B422A", color2: "#E0E4ED" }} />
                <Thumbnail objectStyle={{ imagePath: 'hand.png', description: props.dataFromParent[localStorage['languages']].artNames[2], thumbnail: thumbnails[0], color1: "#243F21", color2: "#FEF762" }} />
                <Thumbnail objectStyle={{ imagePath: 'welcome.jpg', description: props.dataFromParent[localStorage['languages']].artNames[3], thumbnail: thumbnails[0], color1: "#061C01", color2: "#D54DC1" }} />
                <Thumbnail objectStyle={{ imagePath: 'house.png', description: props.dataFromParent[localStorage['languages']].artNames[4], thumbnail: thumbnails[0], color1: "#3B3A19", color2: "#492515" }} />
                <Thumbnail objectStyle={{ imagePath: 'spiderman.jpg', description: props.dataFromParent[localStorage['languages']].artNames[5], thumbnail: thumbnails[0], color1: "#137EA4", color2: "#890C14" }} />
                <div className='empty-div'></div>
            </div>
        </div>
    )

}

export default LeftProjects
