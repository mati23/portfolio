import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'
import { Spring } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'
import Thumbnail from './Thumbnail'



const LeftProjects = props => {
    let thumbnails = [
        {
            name: 'Capsule 341',
            description: '<p>I was always passionate about Akira Toriyama art involving vehicles. Since I always watched Dragon Ball Z and read the mangas I constantly saw those capsule vehicles and \
            always thought it was so simple and so well elaborated for the style of the whole anime.\
            With that in mind I tried to replicate the art of Capsule 341 in a 3D form. I learned a lot,\
            discovered new techniques in modeling and texturing and it is also my first animation. That you can see it \
            <a href="https://www.youtube.com/watch?v=-dyYc4c2vQ8">here</a>.</p> <br/>\
            I made this project in Blender 2.81 and created the textures using photoshop for the green and old \
            looking metal and also the name of the vehicle\'s model. I also used eolic turbine sounds in the animation\
            to simulate the running motor of the plane.\
            ',
            folderName: 'capsule341',
        },
        {
            name: 'History Prediction',
            description: '<p> This is where my art exploration started. I was working at Magnifinance remotly for 6 months already.\
            My visa didn\'t got out (and until this it hasn\'t), so I got fired. The hopes of working in a foreign country was slowly fading away. \
            After lefting my first job to this oportunity that I consequently lost, I started to play games.\
            I got fascinated by a game called Metal Gear Solid V. It got me into 3D modeling and how a game so complex like that was made.\
            Meanwhile I also watched a youtuber called NakeyJakey and I got encouraged to create something of my own. \
            This is why I\'m making this page, because I believe this is also a kind of art. I\'m doing to show what is in my head.\
            With some knowledge in Blender since college I started to build something. I had a story and I wondered how to tell it in a few images.\
            And this is the result: <br/>\
            <p>1986, Ukraine, errors in driving the Chernobyl plant cause one of the fuel tanks in reactor 4 to melt, causing an explosion and death of several employees and radiation exposure even in other countries. More than 8 thousand dead.</p></p><br/>\
            <p>1987, China, The Black Dragon Fire burns more than 72 thousand square kilometers reaching even regions of the Soviet Union.</p><br/>\
            <p>1990, China, the city of Guiyu becomes the largest landfill of electronic materials in the world. Rivers and green areas are filled with electronic waste.</p><br/>\
            <p>2010, Gulf of Mexico, explodes one of the oil platforms followed by the spill of almost 10,000 cubic meters of oil per day.</p><br/>\
            <p>2019, Brazil, more than 125 thousand hectares of the Amazon forest burned down. Then, a leak of unknown origin reaches the northeast and southeast of Brazil.</p><br/>\
            <p>2042, With the increase in microdevices and the world population, the consumption of electricity has its value even higher. Water desalination costs are almost impractical.</p><br/>\
            <p>2068, The amount of drinking water reaches alarming levels. The nations of Spain, France, China, Brazil, Mexico and Japan create a development agreement for environmental solutions. There is a huge imbalance between the amount of oxygen and CO2 in the atmosphere. Normal breathing is done only indoors and with air filtration.</p><br/>\
            <p>2076, Vietnam, a type of moss is discovered near the coast. It is believed that it emerged as a mutation in response to Agent Orange\'s gases, in the Vietnam War in 1955. Named Neckeraceae vivifica, capable of breaking CO2 molecules up to 17 times faster than an ordinary plant. The alliance team starts research on it.</p><br/>\
            <p>2079, Neckeraceae vivifica is called the plant of life. Three more types of moss are created from their genetic material, which until today is not known much information about them. One of them emits light in the absence of sunlight to continue the process of photosynthesis overnight. The other two types are blue and orange.</p><br/>\
            <p>2081, natural oxygen backpacks are created, carrying the plant of life. Its surface needs to be glass or acrylic to receive the (little) amount of sunlight needed to perform photosynthesis.</p><br/>\
            </p >',
            folderName: 'historyprediction',
        }, {
            name: 'Time and Money',
            description: 'blabla2',
            folderName: 'timeandmoney',
        }, {
            name: 'Welcome to My Mind',
            description: 'blabla2',
            folderName: 'welcometomymind',
        }, {
            name: 'Haunted House',
            description: 'blabla2',
            folderName: 'hauntedhouse',
        }, {
            name: 'Spider-Man',
            description: 'blabla2',
            folderName: 'spiderman',
        }
    ]
    return (
        <div className='left-projects' >
            <div className="side-title">
                {props.dataFromParent[localStorage['languages']].sideTitle[0]}
            </div>
            <div className="side-row">
                <Thumbnail objectStyle={{ imagePath: 'capsule341.jpg', description: props.dataFromParent[localStorage['languages']].artNames[0], thumbnail: thumbnails[0], color1: "#425269", color2: "#304055" }} />
                <Thumbnail objectStyle={{ imagePath: 'mask.png', description: props.dataFromParent[localStorage['languages']].artNames[1], thumbnail: thumbnails[1], color1: "#2B422A", color2: "#E0E4ED" }} />
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
