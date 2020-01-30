import '../css/mydescription.css'

import React, { Component } from 'react'

class MyDescription extends Component {
    render() {
        return (
            <div className='my-description'>
                {
                    window.localStorage['languages'] == 2 ? <div>
                        I'm still learning japanese, so a lot of the text was translated by Google 「間違えてすみません」.<br />
                    </div> : console.log('NAO foi')
                }
                {this.props.dataFromParent[localStorage['languages']].description[0]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[1]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[2]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[3]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[4]}

            </div>
        )
    }
}

export default MyDescription