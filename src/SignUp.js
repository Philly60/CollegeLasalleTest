import React, { useState } from 'react';
import { auth } from './firebase';
import './SignUp.css'

function SignUp() {
  const [fname, setFName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lname, setLName] = useState('')


  const handleSignUp = async () => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      console.log('Signed up user:', userCredential.user);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div class="SignUp-Container">
      <h2>Sign Up</h2>
      <input
      type="fname"
      palceholder="First name"
      value={fname}
      onChange={(e) => setFName(e.target.value)}
      />
      <input
      type="lname"
      placeholder="Last name"
      value={lname}
      onChange={(e)=> setLName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
