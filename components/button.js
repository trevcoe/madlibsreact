import React from 'react';

const Button = () => {
    const handleClick = () => {
    }
    return (
      <button onClick={handleClick}>
        Get Story!
      </button>
    );
  }

// In my mind, when the button is clicked I want it to run 
// this to display the story:
//(psuedo code)
//
//if (form is submitted)
//  return (
//     <div>
//       <p>The {color} {noun} jumped over the {.adj} {Another noun}</p>
//     </div>
// )
// 
  export default Button;