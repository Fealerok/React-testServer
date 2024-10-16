import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss";

import Sidebar from '../../components/ChatComponents/Sidebar/Sidebar';
import EnteringMessage from '../../components/ChatComponents/EnteringMessage/EnteringMessage';
import Chat from '../../components/ChatComponents/Chat/Chat';

import { io } from 'socket.io-client';



const ChatPage = () => {

  const [data, setData] = useState(0);

  const socketRef = useRef(null);
  

  useEffect(() => {
    socketRef.current = io("http://localhost:3030/");

    socketRef.current.on("get-data", (connectedUsers) => {
      setData(connectedUsers);
    });
    socketRef.current.emit("get-data");
  }, []);


  window.addEventListener("beforeunload", () => {socketRef.current.disconnect()});

  return (
    <div className={styles.chat_page}>
        <Sidebar></Sidebar>
        <div className={styles.right_content}>
            <Chat></Chat>
            <EnteringMessage></EnteringMessage>
            <span>{data}</span>
        </div>
    </div>
  )
}

export default ChatPage