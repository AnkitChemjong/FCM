import React,{ useEffect, useState } from 'react';
import { getToken} from 'firebase/messaging';
import { messaging,onMessaging} from './utils/firebaseUtils.js';
import { toast } from 'react-toastify';
import axios from 'axios';

import './App.css'

function App() { 
  // console.log(import.meta.env.VITE_VAPIKEY)
  const [token,setToken]=useState(null);
  useEffect(()=>{
    //req user for notification permission
    async function requestPermission(){
      const permission=await Notification.requestPermission();
      if(permission==='granted'){
        //generate token
      const token=await  getToken(messaging,{vapiKey:import.meta.env.VITE_VAPIKEY});
        setToken(token)
      }
      else if(permission==='denied'){
        //alert for denied permission
        alert('denied permission');
      }
    }
    requestPermission();
  },[]);

  onMessaging()
  .then((payload) => {
    toast(
      <div>
        <strong>{payload.notification.title}</strong>
        <p>{payload.notification.body}</p>
      </div>,
      { position: 'top-right' }
    );
    console.log("Received foreground message", payload);
  })
  .catch((error) => {
    console.error('Error receiving foreground message', error);
  });
  async function sendMessage(){
    const message={
      title:'hello world',
      body:"yes notifications",
      deviceToken:token
    }
    const result=await axios.post(`${import.meta.env.VITE_BACKENDURL}/api/firebase/send-notification`,message);
    if(result.status===200){
      toast.success(
        <div>
          <strong>Notification sent Successfully</strong>
        
        </div>,
        { position: 'top-right' }
      );
    }
    else{ toast.error(
      <div>
        <strong>Error</strong>
      
      </div>,
      { position: 'top-right' }
    );

    }
  }


  return (
    <>
     <button onClick={sendMessage}>Click</button>
     <p>{token? token:null}</p>
    </>
  )
}

export default App
