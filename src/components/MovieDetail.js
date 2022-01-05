import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let id = this.props.match.params.id
        let movie = this.props.movies.find((m)=> m.id=== id)
        return ( <div>{console.log(movie.title)}</div> );
    }
}
 
export default MovieDetail;