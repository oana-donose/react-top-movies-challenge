import React, { Component } from 'react'

import MovieInfo from './MovieInfo'
import Poster from './Poster'

class MovieCard extends Component {
    
    render () {
        return (
            <div className="moviecard">
                <Poster imgsrc={this.props.imgsrc}></Poster>
                <MovieInfo title={this.props.title} plot={this.props.plot}></MovieInfo>
            </div>
        )
    }
}

export default MovieCard