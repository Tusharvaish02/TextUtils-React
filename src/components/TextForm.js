import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleExtraSpaces = () =>{
    let newtext= text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showALert("Extra Spaces has been removed", "success");
  }
  const handleClear = () =>{
    let edtext="";
    setText(edtext);
    props.showALert("Text is cleared", "success");
  }

  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked:  "+ text);
    let newtext= text.toUpperCase();
    setText(newtext);
    props.showALert("converted to UpperCase", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked:  "+ text);
    let newtext= text.toLowerCase();
    setText(newtext);
    props.showALert("converted to LowerCase", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("on change")
    setText(event.target.value);  
  }

  const handletoCopy =()=>{
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showALert("copied to clipboard", "success");
  }

  return (
    <>
    <div className='container' style={{color:props.mode=== 'light'? 'black':'white'}}>
        <h1 className='my-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'light'? 'white':'#A412A3',
             color:props.mode=== 'light'? 'black':'white' }} id="exampleFormControlTextarea1" rows="9"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={speak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove-ExtraSpaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletoCopy}>Copy Text</button>

    </div>
    <div className="container my3" style={{color:props.mode=== 'light'? 'black':'white'}}>
    <h1>Yout text sumamry</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
