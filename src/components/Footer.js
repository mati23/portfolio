import React from 'react'
import '../css/footer.css'
import { useSpring, animated } from 'react-spring'
import CircledThumbnail from './CircledThumbnail'
import { Radar, Bar } from 'react-chartjs-2'

const Footer = props => {
    const technologiesTitle = [
        {
            first_title: "Tecnologias que amei usar até agora",
            second_title: "Ferramentas que uso até hoje"
        },
        {
            first_title: "Technologies I loved to use so far",
            second_title: "And the tools I'm always using"
        },
        {
            first_title: "今まで使っていたテクノロジー",
            second_title: "そして私がいつも使っているツール"
        }
    ]

    return (
        <div className='footer'>
            <div className="footer-title">{technologiesTitle[localStorage['languages']].first_title}</div>
            <div className="thumbnail-container">

                <CircledThumbnail objectStyle={{ imagePath: 'javascript.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'csharp.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'python.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'bootstrap.jpg' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'chartjs.svg' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'angular.png' }} />
                <CircledThumbnail objectStyle={{ imagePath: 'react.png' }} />
            </div>
            <div className="footer-title">{technologiesTitle[localStorage['languages']].second_title} </div>
            <div className="thumbnail-container">
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
                                fontColor: '#fff',
                                backdropColor: '#444'
                            },
                        },
                    }}
                />
            </div>
            <div className="thumbnail-container">
                <div className="contact">
                    <CircledThumbnail objectStyle={{ imagePath: 'me.png' }} />
                    <div className="social-media-container">
                        <CircledThumbnail objectStyle={{ imagePath: 'github-image.svg', clickable: true, tooltipText: '/mati23' }} />
                        <CircledThumbnail objectStyle={{ imagePath: 'telegram.svg', clickable: true, tooltipText: '+55 88 99606-1495' }} />
                        <CircledThumbnail objectStyle={{ imagePath: 'linkedin.png', clickable: true, tooltipText: '/mateusarruda23' }} />
                        <CircledThumbnail objectStyle={{ imagePath: 'artstation.jpg', clickable: true, tooltipText: '/arruda23' }} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer