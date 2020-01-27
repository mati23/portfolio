import React from 'react'
import '../css/footer.css'
import { useSpring, animated } from 'react-spring'
import CircledThumbnail from './CircledThumbnail'
import { Radar, Bar } from 'react-chartjs-2'

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
            <div className="thumbnail-container" onMouseEnter={() => console.log(props)}>
                <CircledThumbnail objectStyle={{ imagePath: 'ubuntu.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'blender.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'vs.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'inkscape.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'sql.png' }} />
            </div>

            <div className="thumbnail-container">
                <Radar
                    data={props.dataFromParent[localStorage['languages']].data}
                    width={200}
                    height={400}
                    options={{
                        legend: {
                            display: false
                        },
                        maintainAspectRatio: false,
                        scale: {
                            pointLabels: {
                                fontColor: "rgba(255,255,255,1)",
                                fontSize: 16
                            },
                            gridLines: {
                                color: "rgba(255,255,255,0.5)"
                            },
                            ticks: {
                                fontColor: "rgba(255,255,255,1)",
                                fontSize: 10,
                                fontStyle: "bold",
                                suggestedMin: 20,
                                suggestedMax: 100,
                                backdropColor: "rgba(0,0,0,0)"
                            },
                        },
                    }}
                />
            </div>
            <div className="thumbnail-container">
                <div className="contact">
                    <CircledThumbnail objectStyle={{ imagePath: 'me.png' }} />
                    <div className="social-media-container">
                        <CircledThumbnail objectStyle={{ imagePath: 'github-image.svg' }} />
                        <CircledThumbnail objectStyle={{ imagePath: 'telegram.svg' }} />
                        <CircledThumbnail objectStyle={{ imagePath: 'linkedin.png' }} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer