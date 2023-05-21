import { Component } from "react"
class ProfileClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        
    }

    render(){
        let {count} = this.state;
        return (<div>
            <h2>Hello from Profile Class Component</h2>
            <h3>Mentored by one and only {this.props.name}</h3>
            <button onClick={
                ()=>{
                    this.setState({
                        count : ++count
                    })
                }
            }>++count</button>
            <h3>Current Count is: {count}</h3>
        </div>)
    }
    
}

export default ProfileClassComponent;