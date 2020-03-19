import React from 'react'
import '../App.css'
import ReactStars from 'react-rating-stars-component'
import {MdDelete} from 'react-icons/md'
import EditMovie from './EditMovie'
import { connect } from 'react-redux'
import { removeMovie } from '../actions/actions'
import { Link } from 'react-router-dom'
// import { FaBeer } from 'react-icons/fa';
 function CardMovie(props) {
    return (
        <div className="movie-card">
            <ReactStars
                count={5}
                value={props.movie.star}
            />
            <img src={props.movie.img} className="img-movie" />
            <p>{props.movie.name}</p>
            <p>{props.movie.duration}-{props.movie.year}  </p>
            {/* <FaBeer /> */}
            <MdDelete className="icon" onClick={()=>props.delete(props.movie.id)} />
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> */}
           <EditMovie  movie={props.movie} />
          <Link to={'/'+props.movie.id} > <button>details</button></Link>
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    delete:payload=>dispatch(removeMovie(payload))
})
export default connect(null,mapDispatchToProps) (CardMovie)
