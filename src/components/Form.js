import React, { useState } from "react";
import { Box, Container, Typography } from '@mui/material/';
import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setPassword(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.perventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
        }

        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password: ${userName}`
            );
            return;
        }

        setUserName('');

        setPassword('');

        setEmail('');

        alert('Hello $(userName)');
    };

    return (
        <Box>
        <p>Hello {userName}</p>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
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