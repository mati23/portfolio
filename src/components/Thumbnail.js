import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Spring } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'


const Thumbnail = props => {
    const [middleIcon, set_middleIcon] = useSpring(() => ({
        scale: 1,
        opacity: 1,
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
        config: { mass: 2, tension: 170, friction: 12 }
    }));

    console.log(props)
    let path = require('../images/' + props.objectStyle.imagePath)
    return (
        <div className="project-thumbnail">
            <div className='image-thumbnail'>
                <div className='frame'>
                    <img src={path} alt="" />
                    <animated.div
                        onMouseEnter={() =>
                            set_middleIcon({
                                scale: 2,
                                opacity: 0.5,
                                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                                config: { mass: 2, tension: 170, friction: 12 }
                            })

                        }
                        onMouseLeave={() =>
                            set_middleIcon({
                                scale: 1,
                                opacity: 1,
                                boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                                config: { mass: 2, tension: 170, friction: 12 }
                            })
                        }
                        className='frame-description' style={{
                            transform: middleIcon.scale.interpolate(s => `scale(${s}) rotateZ(.1deg)`),
                            boxShadow: middleIcon.boxShadow
                        }}
                    >{props.objectStyle.description}</animated.div>
                </div>
            </div>
        </div >
    )
}

export default Thumbnail