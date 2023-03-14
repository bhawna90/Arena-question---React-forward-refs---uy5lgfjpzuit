import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here 
  const [values, setValues] = useState("")

  const newRef = useRef()
  const settingValue = () =>{
    console.log(newRef.current.value);
    setValues(newRef.current.value)
  }
  const focusInput = () => {
    console.log(newRef);
    newRef.current.focus()
  }
  return (
    <div>
    <InputField  ref={newRef}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}


export default App;
