import React, { useState } from "react";

function Calculator() {
 const [result, setResult] = useState("")

 function clickHandler(event){
    setResult(result.concat(event.target.value))

 }
 function DisplayClear(){
    setResult("")
 }

 const calculate = ()=>{
    setResult(eval(result).toString())

 }
 
  return (
    <div className="container" >
      <input type="text" placeholder="0" name="screen" id="calc" value={result} />
      <input type="button" value="1" className="btn" onClick={clickHandler} />
      <input type="button" value="2" className="btn" onClick={clickHandler} />
      <input type="button" value="3" className="btn" onClick={clickHandler} />
      <input type="button" value="4" className="btn" onClick={clickHandler} />
      <input type="button" value="5" className="btn" onClick={clickHandler} />
      <input type="button" value="6" className="btn" onClick={clickHandler} />
      <input type="button" value="7" className="btn" onClick={clickHandler} />
      <input type="button" value="8" className="btn" onClick={clickHandler} />
      <input type="button" value="9" className="btn" onClick={clickHandler} />
      <input type="button" value="0" className="btn" onClick={clickHandler} />
      <input type="button" value="+" className="btn" onClick={clickHandler} />
      <input type="button" value="-" className="btn" onClick={clickHandler} />
      <input type="button" value="/" className="btn" onClick={clickHandler} />
      <input type="button" value="*" className="btn" onClick={clickHandler} />
      <input type="button" value="%" className="btn" onClick={clickHandler} />
      <input type="button" value="." className="btn" onClick={clickHandler} />
      <input
        type="button"
        value="Clear"
        className="btn btn1"
        onClick={DisplayClear}
      />
      <input type="button" value="=" className="btn btn1" onClick={calculate} />
    </div>
  );
}

export default Calculator;
