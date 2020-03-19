import React, { Component } from 'react'
// import movies from './Data'
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import ListMovies from './ListMovies'
import AddMovie from './AddMovie'
export default class Main extends Component {
    // state={
    //     movies,
    //     nameFilter:'',
    //     ratingFilter:0
    // }
    // handleAdd=(input)=>{
    //     this.setState({
    //         movies:[...this.state.movies,input]
    //     })
    // }
    // deleteMovie=(key)=>{
    //     this.setState({
    //         movies:this.state.movies.filter(el=> el.id!=key)
    //     })
    // }
    // editMovie=(key,newMovie)=>{
    //     this.setState({
    //         movies:this.state.movies.map(el=>
    //             (el.id==key)?{...newMovie} :el
    //             )
    //     })   }
    //     handleChangeName=(input)=>{
    //         this.setState({
    //             nameFilter:input
    //         })
    //     }
    //     handelRating=(rate)=>{
    //         this.setState({
    //             ratingFilter:rate
    //         })
    //     }
    render() {
        return (
            <div>
                {/* <NameFilter change={this.handleChangeName} />
                <RatingFilter  rateFilter={this.state.ratingFilter} handleRating={this.handelRating}/>
                <ListMovies  ratingFilter={this.state.ratingFilter} nameFilter={this.state.nameFilter} movies={this.state.movies} delete={this.deleteMovie} edit={this.editMovie} />
                <AddMovie add={this.handleAdd} /> */}
                <NameFilter  />
                <RatingFilter   />
                <ListMovies />
                <AddMovie  />
            </div>
        )
    }
}
