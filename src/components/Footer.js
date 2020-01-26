import React from 'react'
import '../css/footer.css'
import { useSpring, animated } from 'react-spring'
import CircledThumbnail from './CircledThumbnail'

const Footer = props => {

    return (
        <div className='footer'>
            <div className="footer-title">Technologies I loved to use so far</div>
            <div className="thumbnail-container">

                <CircledThumbnail objectStyle={{ imagePath: 'javascript.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'csharp.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'python.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'bootstrap.jpg' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'chartjs.svg' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'angular.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'react.png' }} />
            </div>
            <div className="footer-title">And the tools I'm always using </div>
            <div className="thumbnail-container">
                <CircledThumbnail objectStyle={{ imagePath: 'ubuntu.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'blender.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'vs.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'inkscape.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'sql.png' }} />
            </div>
        </div>
    )
}

export default Footer