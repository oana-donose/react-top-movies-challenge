import React, { Component } from 'react'

class Poster extends Component {
    render () {
        return (
            <img className="poster" src={this.props.imgsrc}
            alt={this.props.title + " movie poster"}/>
        )
    }
}

export default Poster