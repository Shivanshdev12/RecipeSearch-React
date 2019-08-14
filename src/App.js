import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import Navbar from "./Components/navbar";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './Components/Home';
import Modal from './Components/Modal/Modal';


class App extends Component {
  state = {
    search: 'cake,ice' ,
    recipes: []
  };
  onChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };
  //function for getting our recipe
  onClick = async (e) => {
    e.preventDefault();
    var apikey = `d295351bf8965b5c11b70a00c0bda169`;
    const url = `https://www.food2fork.com/api/search?key=${apikey}&q=${
      this.state.search
    }`;
    await fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ recipes: data.recipes }));
  };
  
  componentDidMount=()=>{
    const json=localStorage.getItem("recipes");
    const recipes=JSON.parse(json);
    this.setState({recipes});
  }
  componentDidUpdate=()=>{
    const recipes=JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/recipe/:id' render={(props)=><Modal {...props}/> }/>
            <Route path='/search' render={(props)=><Search
            {...props}
            value={this.state.search}
            recipes={this.state.recipes}
            Change={this.onChange}
            Click={this.onClick} />}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
