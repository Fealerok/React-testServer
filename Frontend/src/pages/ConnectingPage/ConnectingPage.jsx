import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss"
import Input from '../../components/Common/Input/Input'
import { io } from 'socket.io-client';

let socket;

const ConnectingPage = ({socket}) => {

  const [messages, setMessages] = useState(null);

    socket.on("get-messages", (messagesArray) => {
      setMessages(messagesArray);
    });


  function showMessages(){
    socket.emit("send-username", "Fealer");
    if (messages || messages.length > 0){
      messages.forEach((data) => {
        console.log(data);
      });
    }

    else{
      console.log("Сообщений нет");
    }
    
  }

  return (
    <div className={styles.connecting_page}>
      <div className={styles.connection_form}>
        <h1>Welcome to OnlineChat!</h1>
        <h3>To connect to the chat, enter your nickname below</h3>

        <form className={styles.form_input}>
          <Input label_text={"Username"}></Input>
        </form>

        <button className={styles.connect_button} onClick={() => {showMessages()}}>Connect</button>
      </div>
    </div>
  )
}

export default ConnectingPage