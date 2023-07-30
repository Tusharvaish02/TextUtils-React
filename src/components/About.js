import React from 'react'

export default function About(props) {

    // const [mystyle,setMyStyle]=useState({
    //     color: 'black', 
    //     backgroundColor: 'white'
    // })
    let mystyle ={
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor: props.mode === 'dark' ? '#9310A0': 'white'
    }
    
  return (
    <div className="container"  >
        <h1 className='my-3' style={{color : props.mode === 'dark'? 'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Text tools</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={mystyle}>
                   This text utility app provides the features to edit your text according to your needs
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>                                   
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={mystyle}>
                    This Text utility app is absolutely free for the use and it wont cause you a single penny.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compaitability</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={mystyle}>
                    The UI of this app is compaitable with the all of the browsers and it supports all types of devices such as Phones, Tablets, and Desktop devices.
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
