import React, { useState,useEffect} from "react";
import "../styles/styles.css";
import firebase from "../firebase";
import {useHistory,Redirect} from "react-router-dom";
function App() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [verified,setVerified] = useState(false);
  let history = useHistory();
  
  useEffect(() => {
    console.log("history called")

 /* eslint-disable */    if(verified)  history.push('/signup')
  }, [verified])
  const handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    console.log("Mobile",mobileNumber)
    var no = mobileNumber;
    var number = "+91" + no;
    console.log("mob", number);
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt("Enter the otp", "");

        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user);
            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
              setVerified(true);
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  return (
   <>
  {console.log("history",history)}
    <div class="bg-grey-700 min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
          <input
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="phonenumber"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => {setMobileNumber(e.target.value) 
              console.log("event",e.target)}}
          />
          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-400 text-black hover:bg-green-dark focus:outline-none my-1"
            onClick={handleClick}
          >
            Send OTP
          </button>
          <button onClick={()=>setVerified(true)}>check route</button>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account?
          <a
            class="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
        <label></label>
        <div id="recaptcha"></div>
      </div>
    </div>
    
    </>
  );

}
export default App;
