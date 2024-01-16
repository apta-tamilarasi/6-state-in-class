import React,{Component} from "react";
import Componentdidchild from "./Componentdidchild.js";

class Componentdid extends  Component{
    constructor(){
        super()

        this.state={
            name:"react",
            age:20,
            show:false
        }

    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log(nextstate,this.state)
        if(this.state.name!==nextstate.name || this.state.show!==nextstate.show){
            return true
        }
        else{
            return false
        }
    }
  
    componentDidMount(){
        console.log('hello mount');
    }
    componentDidUpdate(prevprops,prevstate){
        console.log(prevstate);
    }
     render(){


        let handle=()=>{
            this.setState({name:"Life Cycle"})
        }
    return <section>
        <h1>{this.state.name}</h1>
        <button onClick={handle}>Click</button><br/><br/>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>view child</button><br/><br></br>
        {this.state.show?<Componentdidchild/>:''}
        </section>
}
}
export default Componentdid