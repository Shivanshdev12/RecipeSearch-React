import React,{Component} from 'react';
import './Modal.css';
import {Link} from 'react-router-dom'

const apikey = `d295351bf8965b5c11b70a00c0bda169`;

class Modal extends Component{
  state={
    activeRecipe:[]
  }
  componentDidMount=async ()=>{
    const title=this.props.location.state.recipe;
    const req=await fetch(`https://www.food2fork.com/api/search?key=${apikey}&q=${title}`);
    const res=await req.json();
    this.setState({
      activeRecipe:res.recipes[0]
    });
  }
  render(){
    const recipe=this.state.activeRecipe;
    return (
      <React.Fragment>
        <div className="backdrop"/>
        <div className="error-modal">
          <h2>You Selected</h2>
          <div className="modal-image m-2">
            <img src={recipe.image_url} />
          </div>
          <h4>{recipe.title}</h4>
          <h3>
            Publisher:
            <span className="text-warning">{recipe.publisher}</span>
          </h3>
          <div className="error-modal__actions">
            <button type="button" className="btn btn-danger">
              <Link to="/search" style={{ textDecoration: 'none' ,color:'white'}}>Okay</Link>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
