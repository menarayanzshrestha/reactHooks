import React, { Component } from 'react'

export class home extends Component {

    constructor(props){
        super(props);
        this.state = {
            messageforhome1 : "default home value"
        }
    }

    // componentWillMount = () => {
    //     //unsage must not used
    //     //it is called once only 
    //     // console.log("component Will mount here");
    //     alert("component Will mount here from home component");
    // }

    static getDerivedStateFromProps(props, state) {

         // this is replacement of componentWillReceiveProps
        // getDerivedStateFromProps may be called multiple times for a single update, so it’s important to avoid any side-effects. Instead, you should use componentDidUpdate, which executes only once after the component updates.

        console.log(props, state, 'here in home')
        alert("getDerivedStateFromProps home here");
        if (props.messageforhome1 !== state.messageforhome1) {
          return {
            messageforhome1: state.messageforhome1,
          };
        }
    
        // Return null if the state hasn't changed
        return null;
    }


    componentDidMount = () => {
        //it is called once only 
        //api request should be done here
        //as it runs once only so data we get from api request should be kept on state .  
        alert("componennt did mount from home component");
    }

    componentWillUnmount = () => {
        //it is called when it is unmounted i.e, when this component is not rendered
        // console.log("component will unmount home here");
        alert("component will unmount from home component");
    }


    // this.forceUpdate();  //for forcely updatating the components
    render() {
        return (
            <div>
                Home
                <h3>{this.state.messageforhome1}</h3>
            </div>
        )
    }
}

export default home;
