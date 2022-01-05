import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
        // handleClick(movie){
        // let b = this.state.budget
        // }

    
    render() { 
        let movies = this.props.movies
        return ( 
        <div>
            <div id="u-input">
            <input type="text" placeholder="Ask and you shall receive" />
            <div id="button" className='seek'>Seek</div>
            </div>
         

           <div>{movies.map(m => {return <Movie  m={m} updateRent={this.props.updateRent} key={m.id} />})}</div>

        </div> );
    }
}

// render() { 
//     let movies = this.props.movies
//     return ( 
//     <div>
//       {movies.map(m => {return <Movie  m={m} updateRent={this.props.updateRent} key={m.id} />})}
//     </div> );
// }
 
export default Catalog;