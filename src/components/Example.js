import React from 'react';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
        <h3>This is the class version of this component</h3>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        <h3>Hooks do not work inside of classes.</h3>
        </div>
      );
    }
  }

  export default Example;