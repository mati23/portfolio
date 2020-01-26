import '../css/leftprojects.css'

import React, { Component } from 'react'

import { useSpring, animated } from 'react-spring'


const Thumbnail = props => {
    const [middleIcon, set_middleIcon] = useSpring(() => ({
        scale: 1,
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
        config: { mass: 2, tension: 170, friction: 12 }
    }));
    const [descriptionOpacity, setDescription] = useSpring(() => ({
        opacity: 0.9,
        background: "linear-gradient(45deg, " + props.objectStyle.color1 + " 10%, " + props.objectStyle.color2 + " 100%)"
    }));

    console.log(props)
    let path = require('../images/' + props.objectStyle.imagePath)
    return (
        <div className="project-thumbnail">
            <div className='image-thumbnail'>
                <animated.div className='frame' onMouseEnter={() => {
                    set_middleIcon({
                        scale: 1.05,
                        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                        config: { mass: 1, tension: 170, friction: 12 }
                    })
                    setDescription({
                        opacity: 0
                    })
                }
                }
                    onMouseLeave={() => {
                        set_middleIcon({
                            scale: 1,
                            boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                            config: { mass: 2, tension: 170, friction: 12 }
                        });
                        setDescription({
                            opacity: 0.9
                        })
                    }
                    }
                    style={{
                        transform: middleIcon.scale.interpolate(s => `scale(${s})`),
                        boxShadow: middleIcon.boxShadow,
                        opacity: middleIcon.opacity
                    }}>
                    <img src={path} alt="" style={{}} />
                    <animated.div
                        style={{
                            opacity: descriptionOpacity.opacity,
                            background: descriptionOpacity.background,
                        }}
                        className='frame-description'>{props.objectStyle.description}</animated.div>
                </animated.div>
            </div>
        </div >
    )
}

export default Thumbnail