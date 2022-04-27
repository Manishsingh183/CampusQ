import React,{useState} from "react";
import {GoogleLogin,GoogleLogout} from 'react-google-login';
// require('dotenv').config()


function Login(){

    const [showloginbutton,setloginbutton] = useState(true);
    const [showlogoutbutton,setlogoutbutton] = useState(false);
    // const [isSignedIn,setSignIn] = useState(false);


    const clientId = "271431844215-si27v5sh2q4gt7ta6jp3iegpdrreqm0e.apps.googleusercontent.com";

    function onLoginFailure(res){
        console.log("Login Failed: ",res);
    }

    function onLoginSuccess(res){
          console.log("Login success: ",res.profileObj);
          setloginbutton(false);
          setlogoutbutton(true);
        //   setSignIn(true);
    }

    function onLogoutSuccess(){
        setloginbutton(true);
        setlogoutbutton(false);
        // setSignIn(false);
        console.clear();
    }

    return (
    <div>
    {showloginbutton ?
        <GoogleLogin
        // clientId={process.env.CLIENT_ID}
        clientId={clientId}
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        /> : null
    }
    
    {showlogoutbutton ? 
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    /> : null
    }
    </div>
    );
}

export default Login;