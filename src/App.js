import React from 'react';
import Home from './components/home';
import Home1 from './components/home1';
import './App.css';

class App extends React.Component {

  constructor(){
    alert("constructor here");
    super();
    this.state = {
      example : 1,
      messageforhome1 : "messageforhome1"
    }
  }

  _up = () => {
    this.setState({
      example : this.state.example + 1
    })
  }

  _down = () => {
    this.setState({
      example : this.state.example - 1 
    })
  }

  // static getDerivedStateFromProps = (props, state) => {
    // this is replacement of componentWillReceiveProps
    // getDerivedStateFromProps may be called multiple times for a single update, so it’s important to avoid any side-effects. Instead, you should use componentDidUpdate, which executes only once after the component updates.
  //   alert("getDerivedStateFromProps app here");
  // }


  // componentWillMount is considered as unsafe use didmount for api request
  // componentWillMount = () => {
  //   //it is called once only 
  //   // console.log("component Will mount here");
  //   alert("component Will mount app here");
  // }

  componentDidMount = () => {
    //it is called once only 
    //api request should be done here
    //as it runs once only so data we get from api request should be kept on state .  
    alert("componennt did mount app here");
  }

  //as state changed
  shouldComponentUpdate = () => {

    //if we donot make this function default is true
    //default is true

    if(this.state.example < 1) {
      return false;
    }

    alert("should component update app here");
    return true;
  }

  // if shouldComponentUpdate returns true, next is (getSnapshotBeforeUpdate then componentDidUpdate)...else escape both (getSnapshotBeforeUpdate and componentDidUpdate)

    getSnapshotBeforeUpdate = () => {
      alert(" getSnapshotBeforeUpdate app here");
    }

    // componentDidUpdate(prevProps, prevState) {
    //   if (this.props.messageforhome1 !== prevProps.messageforhome1) {
    //       // this.setState({
  
    //       // })
  
    //       alert("this.props.messageforhome1 !== prevProps.messageforhome1  came true")
    //   }
    // }

    componentDidUpdate = (prevProps, prevState) => {
      //not good to setstate here may slow down the app
      console.log(prevProps, prevState,"tryintro to get props sand state");
      alert("component did update app here");
    }

  render() {

    console.log(this.state.example,"current value in state");

    if(this.state.example < 3 ) {

      return (
        <div>

          <h1>To console componentWillUnmount Increment upto 3</h1>
          Example Value is ( { this.state.example })

          <button onClick={() => this._up()}>Increment</button>
          <button onClick={() => this._down()}>Decrement</button>

          <Home messageforhome1={this.state.messageforhome1}/>
          <Home1 />
        </div>
      );
    }
    else {
      return (
        <div>To show conponentWillUnMount of home and home1 </div>
      )
    }
  }
}

export default App;
