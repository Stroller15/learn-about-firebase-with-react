import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const SignupForm = () => {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email)
  console.log(password)

  // Event handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed 
        console.log(userCredential)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
