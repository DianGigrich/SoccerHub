import React, { useState } from "react";
import { Box, Container } from '@mui/material/';

function Form() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const Name = "DiansHub1";
    const Pass = "AutoCheck1";

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

       if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.perventDefault();

        if (Name != userName) {
            setErrorMessage('Username is invalid');
        }

        if (Pass != password) {
            setErrorMessage(
                `Incorrect password: ${userName}`
            );
            return;
        }

        setUserName('');


        alert('Hello $(userName)');
    };

    return (
        <Box>
        <p>Hello {userName}</p>
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <Container>
            <p className="error-text">{errorMessage}</p>
          </Container>
        )}
      </Box>  
    )
    };

    export default Form;