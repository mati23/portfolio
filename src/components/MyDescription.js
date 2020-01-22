import '../css/mydescription.css'

import React, { Component } from 'react'

class MyDescription extends Component {
    render() {
        return (
            <div className='my-description'>
                {this.props.dataFromParent[localStorage['languages']].description[0]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[1]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[2]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[3]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[4]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[5]}
                <br />
                {this.props.dataFromParent[localStorage['languages']].description[6]}
            </div>
        )
    }
}

export default MyDescription