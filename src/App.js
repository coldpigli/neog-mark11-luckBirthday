import React, { useState } from 'react';

function App() {
  
  const [messLucky, setMessLucky] = useState("");
  
  return (
  <div className = "container">
    <h1>Check if your Birthday is Lucky or not</h1>
    <iframe className="gif" src="https://giphy.com/embed/bJO0LN9AMKtAbIDF34" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <label htmlFor="datePicker">Enter your Date-Of-Birth</label>
    <input id = "datePicker" type = "date"></input>
    <label htmlFor="luckyNumber">Enter your Lucky Number</label>
    <input id = "luckyNumber" type = "number"></input>
    <h3>{messLucky}</h3>
    <button>I'm feeling lucky</button>
  </div>
    )
}

export default App;
