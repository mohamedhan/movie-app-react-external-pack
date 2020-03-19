import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import '../App.css'
 class Description extends Component {
    state = {
        id: this.props.match.params.movie_id,
      };
    render() {
        const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));

    if (myTab.length === 0) {
      return <Redirect to='/' />;
    } else {
      const { name, year, img, star, description } = myTab[0];
        return (
            <div className='details'>
            <img src={img} alt='' className="img-movie" />
            <div className='movie-details'>
              <p>
                <span>Movie Name:</span> {name}
              </p>
              <p>
                <span>Release Year:</span> {year}
              </p>
              <p>
                <span>Rating:</span>
                <span style={{ color: 'gold' }}>★{star}</span>
              </p>
              <p>
                <span>Description:</span> {description}
              </p>
            </div>
          </div>
        )
    }
}}
const mapStateToProps = state => ({
    movies: state.movies,
  });
export default connect(mapStateToProps) (Description)