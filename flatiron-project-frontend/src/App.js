import React from 'react';
import './App.css';
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './containers/Content';

//App should always render a Menu, Content, and Footer

class App extends React.Component{
  state = {
    showing: null,
    username: null
  }

  home = () => {
    this.setState({showing: null})
  }

  login = () => {
    this.setState({showing: "login"})
  }
  signUp = () => {
    this.setState({showing: "signup"})
  }
  signIn = (username) => {
    fetch(`http://localhost:3000/users`)
    .then(response => response.json())
    .then(users => users.find(user => user.username === username))
    .then(foundUser => this.setState({showing: null, username: foundUser.username}))
  }
  logOut = () => {
    this.setState({username: null})
  }

  render(){
        return (
        <div className="App">
          <Menu username={this.state.username} login={this.login} home={this.home}/>
          <Content showing={this.state.showing} signUp={this.signUp} signIn={this.signIn} username={this.state.username} logout={this.logOut}/>
        </div>
      );
    }
}

export default App;
