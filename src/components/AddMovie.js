import React,{Component,useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import '../App.css'
import { connect } from 'react-redux'
import { addMovie } from '../actions/actions'

 class AddMovie extends Component {
    state={
        show:false,
        name:'',
        img:'',
        rate:0
    }
    handleClose=()=>this.setState({show:false})
    handleShow=()=>this.setState({show:true})
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    // add=()=>{
    //     this.props.add({name:this.state.name,img:this.state.img,star:this.state.rate})
    // }
   
    render() {
        return (
            <div>
                <>
        <Button className="btn-modal" variant="primary" onClick={this.handleShow}>
          +
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input  name="name"  onChange={this.handleChange}  />
              <input  name="img" onChange={this.handleChange} />
              <input   name="rate" onChange={this.handleChange} />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{this.props.add({id:Date.now(),name:this.state.name,img:this.state.img,star:this.state.rate});this.handleClose()}}>
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
    add:payload=>dispatch(addMovie(payload))
})
export default connect(null,mapDispatchToProps) (AddMovie)

