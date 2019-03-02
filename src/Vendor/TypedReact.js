import React from 'react'
import Typed from 'typed.js'

export default class TypedReact extends React.Component 
{
    componentDidMount() 
    {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { options } = this.props;

      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  
    componentWillUnmount() 
    {
      this.typed.destroy();
    }
  
    render() {
      return (
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
      );
    }
  }