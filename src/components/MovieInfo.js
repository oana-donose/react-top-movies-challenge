import React, { Component } from 'react'

class MovieInfo extends Component {
    render () {
        return (
            <div className="info-card">
                <h3 className="title">{this.props.title}</h3>
                <p className="plot">{this.props.plot}</p>
            </div>
        )
    }
}

export default MovieInfo