import React from 'react'
import '../css/footer.css'
import '../css/foundation.css'
import { useSpring, animated } from 'react-spring'

const CircledThumbnail = props => {
    let logoPath = require('../images/logos/' + props.objectStyle.imagePath)
    const [thumbnail, setThumbnail] = useSpring(() => ({
        backgroundColor: 'red'
    }))

    if (!props.objectStyle.clickable) {
        return (
            <animated.div className="circled-tumbnail">
                <div className="inner-circle">
                    <img src={logoPath} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
            </animated.div>
        )
    } else {
        return (
            <animated.button className="circled-tumbnail" onClick={() => { console.log('c   licou') }}>
                <div className="inner-circle">
                    <span data-tooltip className="bottom" tabindex="5" title="Fancy word for a beetle.">scarabaeus</span>
                    {/* <img src={logoPath} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} /> */}
                </div>
            </animated.button>
        )
    }
}

export default CircledThumbnail