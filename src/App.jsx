import { db } from "../firebase";
import { ref, set } from "firebase/database";


import SignupForm from "./components/SignUp";

import './App.css'
import { SigninPage } from "./components/Signin";

function App() {

  const putData = () => {
    set(ref(db, 'user/shubham'), {
      username: 'shubham verma',
      id: 2,
      age: 49
    })
    alert('data set successfully')
  }

  return (
    <>
    <div>
      <h1>This is firebase learning</h1>
      <button onClick={putData}>Put data in db</button>
    </div>
    <br /><br />
    <div>
      <h1>Sign up form implementation</h1>
      <SignupForm/>
    </div>
    <br /><br />
    <div>
      <h1>Signin form implementation</h1>
      <SigninPage/>
    </div>
     

    </>
  )
}

export default App
