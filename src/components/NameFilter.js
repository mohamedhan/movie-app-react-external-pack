import React from 'react'
import { connect } from 'react-redux'
import { nameFilter } from '../actions/actions'

 function NameFilter(props) {
    return (
        <div>
            <input className="search-movie" placeholder="search movie" onChange={(e)=>props.nameFil(e.target.value)}  />
        </div>
    )
}
const mapDispatchToProps=dispatch=>({
    nameFil:payload=>dispatch(nameFilter(payload))
})
export default connect(null,mapDispatchToProps) (NameFilter)
