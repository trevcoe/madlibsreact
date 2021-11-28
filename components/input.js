import React from 'react';


// Why can't I take each input as a seperate input? I was thinking something like:


// const inputNoun = ({noun}) => {
//   return(
//   <input type="text" name={noun} placeholder={noun} />
//   )
// }

// const inputColor = ({color}) => {
//   return(
//   <input type="text" name={color} placeholder={color} />
//   )
// }
//
// etc


const Input = ({props}) => {
  return (
    <input type="text" name={props} placeholder={props} />
  )
}
  export default Input;