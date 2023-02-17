import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
   const handleUpChange= (event)=>{
    console.log("On change");
    setText(event.target.value)
   }
  cosnt [text, setText] = useState('Enter text here2');
  return (
    <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="15"></textarea>
                 <div>
                  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                 </div>
            </div>
            
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        
  </div>
  )
}
