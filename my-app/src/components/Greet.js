import React from 'react'

// function Greet() {
//     return <h1> Hello Vishwas </h1> 
// }

let Greet = (props) => {
console.log(props);
return <h1> Hello {props.name} </h1>
}

export default Greet
