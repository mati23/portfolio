import '../css/leftprojects.css'

import React, { Component } from 'react'
import { render } from '@testing-library/react'

function LeftProjects() {
    return (
        <div className='left-projects'>
            <div className="div-title">
                What I did as an artist
            </div>
            <div className="side-row">
                <div className="project-thumbnail">A</div>
                <div className="project-thumbnail">A</div>
                <div className="project-thumbnail">A</div>
                <div className="project-thumbnail">A</div>
            </div>
        </div>
    )
}

export default LeftProjects
