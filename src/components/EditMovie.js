import React,{Component,useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import '../App.css'
import {FaEdit} from 'react-icons/fa'
import { connect } from 'react-redux'
import { editMovie } from '../actions/actions'

 class EditMovie extends Component {
    state={
        show:false,
        name:this.props.movie.name,
        img:this.props.movie.img,
        rate:this.props.movie.star
    }
    handleClose=()=>this.setState({show:false})
    handleShow=()=>this.setState({show:true})
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   edit=()=>{
       this.props.edit(this.props.movie.id,{...this.props.movie,name:this.state.name,img:this.state.img,star:this.state.rate})
   }
   
    render() {
        return (
            <div>
                <>
        {/* <Button className="btn-modal" variant="primary" onClick={this.handleShow}> */}
        <FaEdit  onClick={this.handleShow}/>
        {/* </Button> */}
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input  name="name"  onChange={this.handleChange} value={this.state.name} />
              <input  name="img" onChange={this.handleChange}  value={this.state.img} />
              <input   name="rate" onChange={this.handleChange} value={this.state.rate} />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.edit({id:this.props.movie.id,newmovie:{id:this.props.movie.id,name:this.state.name,img:this.state.img,star:this.state.rate}});this.handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
  edit:payload=>dispatch(editMovie(payload))
})
export default connect(null,mapDispatchToProps) (EditMovie)