import '../css/rightprojects.css'

import { render } from '@testing-library/react'
import React, { Component } from 'react'

class RightProjects extends Component {
    render() {
        return (
            <div className='right-projects'>
                <div className="side-title">
                    {this.props.dataFromParent[localStorage['languages']].sideTitle[1]}
                </div>
                <div className="side-row">

                    <div className='empty-div'></div>
                </div>
            </div>
        )
    }
}

export default RightProjects
