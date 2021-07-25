import React from 'react'
import { handleLogin } from '../actions/google'
import {connect} from 'react-redux'
import GoogleLogin from 'react-google-login'
// import { useGoogleLogin } from 'react-google-login'

const Login = ({handleLogin}) => {
  const googleOnClick = () => {
      debugger;
     fetch("http://localhost:3001/auth/google_oauth2", {
         method: "POST", 
         headers: {
             "content-type": "application/json"
         }
     })
     .then(response => response.json())
     .then(response => console.log("response from googleonclick", response))
   }

   const onSuccess = (response) => {
       console.log("successful =>", response)
       handleLogin(response)
   }

   
    return(
        <GoogleLogin
    clientId="341724363289-il3rg7m66mgk3k3qegisntgs0ujv9b37.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={googleOnClick}
    cookiePolicy={'single_host_origin'}
  />
    )
}
export default connect(null, {handleLogin})(Login)

