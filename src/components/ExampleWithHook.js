import React, {useState} from 'react';
//We import the 'useState' hook from react, allowing us to keep localState in a functional component
function ExampleWithHook() {
    const [count, setCount] = useState(0);
    //Inside the ExampleWithHook component, we declare a new state variable by calling the useState hook. It
    //returns a pair of values to which we give names: The variable is 'count' because it holds the number of times the button
    //has been clicked. The second item is a function, setCount, which lets us update "count".
        //useState returns a pair of variables: the current state & the function that updates it.
        //this is similar to this.state.count & this.setState from classes.
      
      
      
        //To use/read the state in this hook version, we just use {count} or whatever the state value is

      return (
          
        <div>
        <h3>This is the hooks: useState version of this component</h3>
          <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click me to fire a callback that will call setCount which takes count + 1 as an argument</button>
        </div>
      );
        //When the use clicks the longly named button, we call setCount with a new value. React, then re-renders the component,
        //passing the new count to it.
  }

  export default ExampleWithHook;