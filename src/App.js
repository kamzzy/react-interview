import { useState } from 'react'
import './App.css';
/*
Input Validation

Create an input field, for string and a button.

- Input should be validated for a hex color input.
- hexes look like this #746FD4
- The input should validate that it has only 7 characters
- Also that it starts with a #
- and the button should remain inactive until a valid color is inputed
- Highlight the input field and the inpured text red in a case of invalid input

*/
function App() {
  const [value, setValue] = useState("")
  const onChange = (e) => {
    const regex = /^[#A-Fa-f0-9]+$/;
    const input = e.target.value;
    if(regex.test(input) && input.charAt(0) === "#"){
      setValue(input);
    }
  }
  return (
    <main>

      <form>
        <input type="text"
          maxLength={7}
          value={value} 
          onChange={onChange} 
          style={ {
            border: value.length === 7 ? "1px solid green" : "1px solid red",
            color: value.length === 7 ? "black" : "red"
          }}
          />
        <button 
        disabled={value.length !== 7}>submit</button>
      </form>
    </main>
  )

}

export default App;
