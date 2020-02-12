import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button, Alert} from 'react-bootstrap'
import Record from './Record.js'
import './Clapper.css';


const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

const Clapper = () => {
    const [textBoxState, setTextBoxState] = useState([]);
    let entryFlag = false;

    const convert = (input) => {
        let array = [];
        let head = 0;
        for(let i = 0; i < input.length; i++){
            if(input.charAt(i) === ' '&& input.charAt(i-1) !== ' '){
                array.push(input.substring(head, i));
                head = i+1;
            }
        }
        console.log(array);
        return array;
    }

    const handleChange = (e) => {
        
        if(e.target.value !== ""){
            let wordArray = convert(e.target.value);
            let newText = wordArray.map((x) => 
                <span>{x}<Emoji symbol='👏' /></span>
            );
            setTextBoxState(newText);
        }
    }

    return (
    <div id="ClapperWrapper">    
      <div id="inputContainer">
          <InputGroup>
            <InputGroup.Prepend>
                <InputGroup.Text>Enter Opinion Here: </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" onChange={handleChange} />
            
          </InputGroup>

          <div id="outputContainer">
            <Alert variant="secondary">
                 {textBoxState}
            </Alert>
          </div>
      </div>
    </div>  
  )
}

export default Clapper;