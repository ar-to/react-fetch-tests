import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchTest1 from './container/search-test1';
import SearchTest2 from './container/search-test2';
import JsonMockApi from './json-mock-api';

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
        requestFailed: false,
        users: [],
        user: '',
        other: []
      };
  }

//ref for using fetch api: https://javascriptplayground.com/blog/2017/01/http-requests-reactjs/
  componentDidMount() {
      let api = 'https://jsonplaceholder.typicode.com/users/';
      fetch(api).then( (res) => {
        if(!res.ok) { throw Error('Network request failed')}
        return res;//w/o with throw error or failed
      }).then( (res) => {
          return res.json();
          }).then((data) => {
            console.log(data);
            setTimeout( () => {
             this.setState( { users : data });
             console.log(this.state.users);
           }, 1000);
         }, () => {
           this.setState( { requestFailed: true })
         });

     let api2 = 'https://jsonplaceholder.typicode.com/users/1';
     fetch(api2).then( (res) => {
       if(!res.ok) { throw Error('Network request failed')}
       return res;//w/o with throw error or failed
     }).then( (res) => {
         return res.json();
         }).then((data) => {
           console.log(data);
           setTimeout( () => {
            this.setState( { user : data });
            console.log(this.state.user);
          }, 1000);
        }, () => {
          this.setState( { requestFailed: true })
        });
  }


  render() {
    //if(this.state.requestFailed) { return <p>Failed</p>}
    if(!this.state.users) { return <p>loading...</p>}
    return (
      <div className="App">
      <h3>{this.state.user.name}</h3>
      <h4>{this.state.users.length}</h4>
      <JsonMockApi users={this.state.users}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchTest1 />
        <SearchTest2 />
    </div>
    );
  }
}

export default App;
