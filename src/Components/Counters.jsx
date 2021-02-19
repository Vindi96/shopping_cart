import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    
    render() { 
        const {onDelete, onIncrement, onReset,onDecrement, counters}=this.props;
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m2">Reset</button>

            {counters.map(counter=>(
          <Counter 
          key={counter.id} 
          onDelete={onDelete} 
          onIncrement={onIncrement} 
          onDecrement={onDecrement}
          counter={counter}>
          </Counter>))}
            </div>
            
          
          );
    }
}

 
export default Counters;