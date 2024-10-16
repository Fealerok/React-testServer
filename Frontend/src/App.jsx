import { useEffect, useState } from 'react'
import ConnectingPage from "./pages/ConnectingPage/ConnectingPage";
import ChatPage from './pages/ChatPage/ChatPage';
import './App.css'


let socket;


function App() {

  const [data, setData] = useState(null);
  const [isConnecting, setIsConnecting] = useState(true);


  async function getData() {
    await fetch("http://localhost:3030/get-data")
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }

  useEffect(() => {
    getData();
  }, [])



  console.log(data);
  return (
    <>

    {isConnecting ? (<ChatPage></ChatPage>) : (<ConnectingPage></ConnectingPage>)}

    </>
  )
}

export default App
