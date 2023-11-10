import { db } from "../firebase";
import { ref, set } from "firebase/database";


import SignupForm from "./components/SignUp";

import './App.css'

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
      <SignupForm/>
    </div>
     

    </>
  )
}

export default App
