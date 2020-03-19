import React from 'react'
import CardMovie from './CardMovie'
import '../App.css'
import { connect } from 'react-redux'
// import { findByLabelText } from '@testing-library/react'
 function ListMovies(props) {
    return (
        <div className="list-movie" >
            {props.movies
            .filter(el=> ((el.name.toUpperCase().includes(props.nameFilter.toUpperCase()))&&(el.star>=props.ratingFilter)))
            .map(el=>
                    <CardMovie  movie={el} key={el.id} />
                )}
        </div>
    )
}
const mapStateToProps=(state)=>({
    movies:state.movies,
    nameFilter:state.nameFilter,
    ratingFilter:state.ratingFilter
})
export default connect(mapStateToProps) (ListMovies)
