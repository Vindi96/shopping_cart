import React, { Component } from 'react';

class Counter extends Component {
   
     
    render() { 
        
        return ( 
            <div className="row">
                <div className="col-1">
                    <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button className='btn btn-secondary btn-sm' 
                    onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
                    <button className='btn btn-secondary btn-sm' 
                    disabled={this.props.counter.value===0 ? "disabled":""}
                    onClick={()=>this.props.onDecrement(this.props.counter)}>-</button>
                    <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>x</button>
                </div>
            
            </div>
            
         );
    }
    getBadgeClasses=()=>{
        let classes = 'badge m-2 badge-';
        classes+= this.props.counter.value===0 ? 'primary':'warning';
        return classes;
    }
    
    formatCount=()=>{
        let number= this.props.counter.value===0 ? 'Zero':this.props.counter.value;
        return number;
    }
}


 
export default Counter;