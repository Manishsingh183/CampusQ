import axios from "axios";
import React,{useEffect, useState} from "react";
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import baseURL from './baseUrl';
import qs from 'qs';
// const dotenv = require('dotenv').config();


function Login(){

    const [showloginbutton,setloginbutton] = useState(true);
    const [showlogoutbutton,setlogoutbutton] = useState(false);
    const [profileData,setProfileData] = useState({fname:"",email:""});
    const [token,setToken] = useState("");
    // const [isSignedIn,setSignIn] = useState(false);


    // const clientId = process.env.CLIENT_ID;
    const clientId = "271431844215-si27v5sh2q4gt7ta6jp3iegpdrreqm0e.apps.googleusercontent.com";

    useEffect(()=>{
       sendUserData();
    },[]);
 
    async function sendUserData(){
        // await axios({
        //     method:"post",
        //     url: baseURL+'userdata',
        //     data: qs.stringify(profileData)
        // }).then(res =>console.log(res))
        // .catch(err=>console.log(err));

        await axios({
            method:"get",
            url: "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token="+token
        }).then(res =>{console.log(res.data);console.log("Present Here");})
        .catch(err=>console.log(err));

    }
    
    function onLoginFailure(res){
        console.log("Login Failed: ",res);
    }

    function onLoginSuccess(res){
        //   console.log("Login success: ",res.getAuthResponse().id_token);
          console.log(res.getAuthResponse().id_token);
          setToken(res.getAuthResponse().id_token);
          setProfileData({fname:res.profileObj.name,email:res.profileObj.email});
        //   console.log("Hello Mf");
        //   console.log(profileData.fname);
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