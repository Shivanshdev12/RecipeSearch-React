import React, { Component } from "react";
import "./Search.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
      recipe:''
  };
  render() {
    return (
      <div className="text-center mt-4">
        <br />
        <h2>
          <cite>
            Search your recipes with <span>Food2Fork</span>
          </cite>
        </h2>
        <br />
        <input type="text"
          value={this.props.value}
          onChange={this.props.Change}/>
        <br />
        <button className="btn btn-danger" onClick={this.props.Click}>SEARCH</button>
        <div>
          <div className="container ">
            <div className="row">
              {this.props.recipes.map(res => (
                <div
                  className="col-sm-11 col-md-6 col-lg-4"
                  key={res.recipe_id}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={res.image_url}
                      alt={res.title}/>
                    <div className="card-body">
                      <h5 className="card-title">
                        {res.title.length < 20
                          ? `${res.title}`
                          : `
                          ${res.title.substring(0, 20)}..`}
                      </h5>
                      <h4>
                        Provided by{" "}
                        <cite className="text-warning">{res.publisher}</cite>
                      </h4>
                      <a href={res.source_url} className="btn btn-warning">
                        Source
                      </a>
                      <button className="btn btn-success">
                        <Link to={{pathname:`/recipe/${res.recipe_id }`,
                        state:{recipe:res.title}
                        }} style={{ textDecoration: 'none' ,color:'white'}}>View Recipe</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
