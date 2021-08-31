import React, { useState } from 'react';

function App() {
  
  const [messLucky, setMessLucky] = useState("");
  const[datepicked, setDatePicked] = useState();
  const[luckyNumber, setLuckyNumber] = useState();


  const checkBirthday = () => {
    let strippedString = datepicked;
    strippedString = strippedString.replaceAll('-','');
    let sumOfDigits = 0;
    for(let i=0; i<strippedString.length; i++){
      sumOfDigits += Number(strippedString[i]);
    }
    if(sumOfDigits%luckyNumber === 0){
      setMessLucky("Congratulations!! Your birthday is Lucky!!")
    }
    else{
      setMessLucky("Umm..Sorry. Birthday isn't lucky. But you make your own luck")
    }
  }
  
  return (
  <div className = "container">
    <h1>Check if your Birthday is Lucky or not</h1>
    <iframe className="gif" src="https://giphy.com/embed/bJO0LN9AMKtAbIDF34" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <label htmlFor="datePicker">Enter your Date-Of-Birth</label>
    <input id = "datePicker" type = "date" onChange = {(e)=>{setDatePicked(e.target.value)}}></input>
    <label htmlFor="luckyNumber">Enter your Lucky Number</label>
    <input id = "luckyNumber" type = "number" onChange = {(e)=>{setLuckyNumber(e.target.value)}}></input>
    <h3>{messLucky}</h3>
    <button onClick = {checkBirthday}>I'm feeling lucky</button>
  </div>
    )
}

export default App;
