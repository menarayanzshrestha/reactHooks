import React, { Component } from 'react'

export class home1 extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    // componentWillMount = () => {

    //     //it is unsafe so dont use
    //     //it is called once only 
    //     // console.log("component Will mount here");
    //     alert("component Will mount here from home1 component");
    // }

    componentDidMount = () => {
        //it is called once only 
        //api request should be done here
        //as it runs once only so data we get from api request should be kept on state .  
        alert("componennt did mount from home1 component");
    }

    componentWillUnmount = () => {
        //it is called when it is unmounted i.e, when this component is not rendered
        // console.log("component will unmount hpme1 here");
        alert("component will unmount from home1 component");
    }

    render() {
        return (
            <div>
                Home1
            </div>
        )
    }
}

export default home1;
