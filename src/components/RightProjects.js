import '../css/rightprojects.css'

import React, { Component } from 'react'
import Thumbnail from './Thumbnail'


const RightProjects = props => {
    let thumbnails = [
        {
            name: 'Magnifinance',
            description: '<p>After three months working for a company in Fortaleza, Brazil, I tried a test \
            for a Full-Stack developer at Magnifinance in Lisbon, Portugal. I passed, left my old job and \
            started working for the second one remotely. The job required me to live there and work on site\
            but unfortunatly the consulate never returned my passaport. I lost my document and \
            the oportunity to work outside my country was gone for the moment. </p>\
            <p>However, in my six months experience period there I learned a lot. Work as a team, manage \
            high end tools for software development, be part of something that a lot of people would use. Despite the lack of knowledge at the \
            beginning it was a good experience and I\'m greatful for it.\
            </p>',
            folderName: 'magnifinance'
        },
        {
            name: 'Animated Preview',
            description: '<p>After spending a lot of time modeling and got myself really immersed in Blender 2.8 I wanted\
            to create something involving programming. So I started to learn how to create random generated trees. After a while\
            I faced a intresting feature in photoshop that made new user see the behaviour of each brush in a animated\
            gif. That was really helpful to me so I decided to do something similar in blender, since a lot of new users\
            don\'t know what each tool does. </p><p>So, using PySide2 along with Blender and after a lot of coffee mugs, YouTube tutorials\
            ,Stackoverflow questions and Blender forums I managed to create a simple tool that will show a preview of each sculpting brush\
            to the user, focusing on new user learning process.</p><p>\
            You can check it out this project by clicking <a href="https://github.com/mati23/AnimatedPreview">here</a></p>.',
            folderName: 'blender'
        },
        {
            name: 'Kaynan Albuquerque Nutritionist',
            description: '<p>This is a project I made for my old friend from high school Kaynan Albuquerque.\
            He is now a successful nutritionist and asked my to develop a antropometric card that he would fill with data\
            and give it to his patients. </p><p> The main goals of this project is that it had to be well designed for the \
            appealing of patient and very understandable. Thats why I used ChartJs along with Materialize to create a beautiful and \
            yet comprehensible UI/UX for his patients.</p>',
            folderName: 'kaynan'
        },
        {
            name: 'Loading Junior',
            description: '<p>Here I had my first professional experience. . </p><p> The main goals of this project is that it had to be well designed for the \
            appealing of patient and very understandable. Thats why I used ChartJs along with Materialize to create a beautiful and \
            yet comprehensible UI/UX for his patients.</p>',
            folderName: 'loadingjr'
        }
    ]
    return (
        <div className='right-projects'>
            <div className="side-title">
                {props.dataFromParent[localStorage['languages']].sideTitle[1]}
            </div>
            <div className="side-row">
                <Thumbnail objectStyle={{ imagePath: 'magnifinance.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[0], thumbnail: thumbnails[0], color1: "#BB1C3B", color2: "#B91C14" }} />
                <Thumbnail objectStyle={{ imagePath: 'blender.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[1], thumbnail: thumbnails[1], color1: "#E1872F", color2: "#025283" }} />
                <Thumbnail objectStyle={{ imagePath: 'kaynan.jpeg', description: props.dataFromParent[localStorage['languages']].codeProjectNames[2], thumbnail: thumbnails[2], color1: "#505050", color2: "#FFCC22" }} />
                <Thumbnail objectStyle={{ imagePath: 'loading.png', description: props.dataFromParent[localStorage['languages']].codeProjectNames[3], thumbnail: thumbnails[3], color1: "#007f74", color2: "#60e0d3" }} />
                <div className='empty-div'></div>
            </div>
        </div >
    )

}

export default RightProjects
