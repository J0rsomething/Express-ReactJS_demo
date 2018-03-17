import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'whatwg-fetch';
// import 'es6-promise';

class App extends Component {
  constructor(){
    super();
    this.state={users:[]};
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(usersArr => this.setState({users: usersArr}));
  }


  // myfunc = ()=> {
  //   console.log('尼玛哥是个大傻逼');
  // };


  render() {
    return (
      // <div>
      //   {
      //
      //     this.state.users
      //   }
      // </div>

      <ul>
        {this.state.users.map(user=>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>
    );
  }
}

export default App;
