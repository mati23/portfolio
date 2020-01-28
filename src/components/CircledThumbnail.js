import React from 'react'
import '../css/footer.css'
import '../css/foundation.css'
import { useSpring, animated } from 'react-spring'
import ReactTooltip from 'react-tooltip'
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

            <animated.div className="circled-tumbnail" onClick={() => { console.log('c   licou') }}>
                <div className="inner-circle" data-tip={props.objectStyle.tooltipText}>
                    <img src={logoPath} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                    <ReactTooltip className='customeTheme' delayHide={500} effect='solid' html={true} />               </div>

            </animated.div>
        )
    }
}

export default CircledThumbnail