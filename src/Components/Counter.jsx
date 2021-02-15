import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value:this.props.counter.value
     }
     handleIncrement=()=>{
       this.setState({value: this.state.value+1});

     }
    render() { 
        
        return ( 
            <div>
               
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm' onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger btn-sm m2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
         );
    }
    getBadgeClasses=()=>{
        let classes = 'badge m-2 badge-';
        classes+= this.state.value===0 ? 'primary':'warning';
        return classes;
    }
    formatCount=()=>{
        let number= this.state.value===0 ? 'Zero':this.state.value;
        return number;
    }
}


 
export default Counter;