import { useState } from 'react'

import './App.css'

function App() {
  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");
  const[bmi,setBmi] = useState(null);
  const[bmiStatus,setBmiStatus] = useState("");
  const[error,setError] = useState("")

  const calculateBmi = () => {
    const isValidateHeight = /^\d+$/.test(height)
    const isValidateWeight = /^\d+$/.test(weight)
    if (isValidateHeight & isValidateWeight) {
      const heightInMeter = height/100; 
      const bmiValue = weight/ (heightInMeter* heightInMeter); 
      setBmi(bmiValue.toFixed(2))
    if (bmiValue < 18.5){
      setBmiStatus("UnderWeight")
    } else if(bmiValue>=18.5 && bmiValue < 24.9) {
      setBmiStatus("Normal Weight")
    } else if(bmiValue >=25 && bmiValue<29.9){
      setBmiStatus("OverWeight")
    }else{
      setBmiStatus("Obese")
    }
    setError("")
  }

    else{
      setBmi(null);
      setBmiStatus("");
      setError("Enter a valid numeric values for height and weight")
    }      
  };

  const clearAll =() => {
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");

  };

  return (
    <>
     <div className="bmi-calculator">
      <div className="box">

      </div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {error && <p className='error'>{error}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm) : </label>
          <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (Kg) : </label>
          <input type="text" id="weight" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button onClick={clearAll}> Clear All</button>
        <div className="result">
          <p>Your BMI is : {bmi}</p>
          <p>Status : {bmiStatus}</p>
        </div>
      </div>
     </div>
      
    </>
  )
}

export default App
