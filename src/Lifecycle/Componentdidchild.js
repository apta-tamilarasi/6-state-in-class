import React,{Component} from "react";

class Componentdidchild extends  Component{
    constructor(){
        super()

        this.state={
            name:"Child",
            age:10,
            count:0
        }
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log(nextstate,this.state)
        if(this.state.name!==nextstate.name || this.state.age!==nextstate.age || this.state.count!==nextstate.count){
            return true
        }
        else{
            return false
        }
       
    }
    componentDidMount(){
        console.log('hello child mount')
       this.timer= setInterval(()=>{
            this.setState({count:this.state.count+1})
            console.log("count");

        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)

    }
    componentDidUpdate(prevprops,prevstate){
        console.log(prevstate)
        console.log("childupdate")
    }
     render(){
        let handle=()=>{
            this.setState({name:"Life Cycle"})
           
        }
        let handleage=()=>{
            this.setState({age:30})
        }
    return <section>
        <h1>{this.state.name}</h1>
        <button onClick={handle}>click</button>
        <h1>{this.state.age}</h1>
        <button onClick={handleage}>click</button>
        <h2>{this.state.count}</h2>
        </section>
}
}
export default Componentdidchild