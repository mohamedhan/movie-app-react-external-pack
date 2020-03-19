import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { connect } from 'react-redux'
import { ratingFilter } from '../actions/actions'

 function RatingFilter(props) {
    return (
        <div>
            <ReactStars 
                count={5}
                // onChange={(ratee)=>props.handleRating(ratee)}
                onChange={(ratee)=>props.ratingFil(ratee)}

                color1={'#000000'}
                color2={'#ffd700'}
                half={false}
            />

        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    ratingFil:payload=>dispatch(ratingFilter(payload))
})
export default connect(null,mapDispatchToProps) (RatingFilter)