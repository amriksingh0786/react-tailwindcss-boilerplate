import React,{useState,useEffect} from 'react'
import '../../styles/styles.css'
import SwipeCards from '../cards/Cards'
import firebase from "../../firebase"
import { useHistory } from 'react-router-dom'
export default function Welcome(){
    const history = useHistory()
    let name = localStorage.getItem('username')
    let email = localStorage.getItem('useremail')
    const db = [
      {
          name: "One",
          url: "http://getdrawings.com/free-icon-bw/one-icon-3.png",
      },
      {
          name: "Two",
          url: "http://getdrawings.com/free-icon-bw/free-shirt-icon-9.png",
      },
      {
          name: "Three",
          url: "http://getdrawings.com/free-icon-bw/serial-number-icon-19.png",
      },
      {
          name: "Four",
          url: "http://getdrawings.com/free-icon-bw/serial-number-icon-18.png",
      },
      {
          name: "Five",
          url: "http://getdrawings.com/free-icon-bw/number-one-icon-17.png",
      },
  ]
    return(
        <>
        <p>Welcome {name}</p>
        <button onClick={()=>{
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log("signout successful");
                history.push("/")
              }, function(error) {
                // An error happened.
              });
        }}> Signout</button>
        <SwipeCards db={db}/>
        </>
    )
}