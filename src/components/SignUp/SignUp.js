import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle, generateUserDocument } from '../../firebase/firebase';
import {
    Box,
    Button,
    Toast,
    Container,
    Text,
    TextField,
    Heading,
  } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <div class="sign-up-main-component">
    <Box padding={3}>
      <Container>
        <div class="sign-up-top-container">
        <Box padding={3}>
          {error !== null && <Toast text={error} />}
          <h2>Sign Up</h2>
          <h1> Sign up to create your StingerSign signature!</h1>
        </Box>
        </div>
        <Box padding={2}>
          <h1 style={{color:'white'}}>Name</h1>
          <TextField
            id="displayName"
            onChange={event => setDisplayName(event.value)}
            placeholder="Enter your name"
            value={displayName}
            type="text"
          />
        </Box>
        <Box padding={2}>
          <h1 style={{color:'white'}}>Email</h1>
          <TextField
            id="email"
            onChange={event => setEmail(event.value)}
            placeholder="Enter your email"
            value={email}
            type="email"
          />
        </Box>
        <Box padding={2}>
          <h1 style={{color:'white'}}>Password</h1>
          <TextField
            id="password"
            onChange={event => setPassword(event.value)}
            placeholder="Enter your password"
            value={password}
            type="password"
          />
        </Box>
        <Box padding={2}>
          <Button
            onClick={event => {
                createUserWithEmailAndPasswordHandler(event, email, password);
                navigate('/');
              }}
            text="Sign up"
            color="blue"
            inline
          />
        </Box>

        <Box padding={2}>
          <Text color="white" weight="bold">Already have an account?</Text>
        </Box>
        <Box padding={2}>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
            Sign in here
        </Link>
        </Box>
      </Container>
    </Box>
  </div>
  );
};
export default SignUp;
