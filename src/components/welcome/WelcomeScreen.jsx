import React,{useState,useEffect} from 'react'
import '../../styles/styles.css'
import SwipeCards from '../cards/Cards'
import firebase from "../../firebase"
import { useHistory } from 'react-router-dom'
export default function Welcome(){
    const history = useHistory()
    let name = localStorage.getItem('username')
    let email = localStorage.getItem('useremail')
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
        <SwipeCards/>
        </>
    )
}