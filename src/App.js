// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]=useState(null);

  const showALert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor ='white';
      showALert("Light mode has been enabled", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor ='#4B0444';
      showALert("Dark mode has been enabled", "success");
    }
  }
  return (
    // <>
    // <Navbar title="texTutils" mode= {mode} toggleMode={toggleMode} aboutBar="About"/>
    // <Alert alert={alert}/>
    // <div className="container my-3">
    // <TextForm showALert={showALert} heading="TextUtils- Word counter, Character counter, Remove Extra Spaces" mode={mode}/>
    // <About mode={mode}/>
    // </div>
    // </>
    <>
    <BrowserRouter>
      <Navbar title="texTutils" mode= {mode} toggleMode={toggleMode} aboutBar="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path='/about' element={<About mode={mode}/>}></Route>

        <Route path="/" element={<TextForm showALert={showALert} heading="Enter the text to analyse below" mode={mode}/>}>
        </Route>
        
      </Routes>
      </div>
    </BrowserRouter>
    </>




  );
}

export default App;
