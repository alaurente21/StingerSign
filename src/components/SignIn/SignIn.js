import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { auth, signInWithGoogle } from '../../firebase/firebase';
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
import { Column } from 'gestalt';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  return (
    <div class="sign-in-main-component">
      <Box padding={3}>
        <Container>
        <div class="sign-in-top-container">
          <Box padding={3}>
            {error !== null && <Toast text={error} />}
            <h2>Sign In</h2>
            <h1>Sign in to see your StingerSign signatures</h1>
          </Box>
          </div>
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
                signInWithEmailAndPasswordHandler(event, email, password);
                navigate('/');
              }}
              text="Sign in"
              color="blue"
              inline
            />
          </Box>
          <Box padding={2}>
            <Text weight="bold" color="white">or</Text>
          </Box>
          <Box padding={2}>
            <Button onClick={signInWithGoogle} text="Sign in with Google" color="red" inline />
          </Box>
          <Box padding={2}>
            <Text weight="bold" color="white">Don't have an account?</Text>
          </Box>
          <Box padding={2}>
            <Link to="signUp" color="white" className="text-white-500 hover:text-red-600">
              Sign up here
            </Link>
          </Box>
          <Box padding={2}>
            <Link
              to="passwordReset"
              className="text-blue-500 hover:text-gold-600"
            >
              Forgot Password?
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};
export default SignIn;
