import React from 'react'
import '../css/footer.css'
import { useSpring, animated } from 'react-spring'

const CircledThumbnail = props => {
    let logoPath = require('../images/logos/' + props.objectStyle.imagePath)
    const [thumbnail, setThumbnail] = useSpring(() => ({
        backgroundColor: 'red'
    }))

    return (
        <animated.div className="circled-tumbnail"
            onMouseEnter={() => { console.log(logoPath) }}
            style={{}}
        >
            <div className="inner-circle">
                <img src={logoPath} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
        </animated.div>
    )
}

export default CircledThumbnail