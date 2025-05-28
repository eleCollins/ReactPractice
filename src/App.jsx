import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/boton'
import Home from './views/home.jsx'
import Login from './views/Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/footer.jsx'
import AppBar from './components/AppBar.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  const login = async (user) => {
  const data = await fetch("http://localhost:5000/login", {
      method:"POST", 
      headers:{"content-type": "application/json"}, 
      body:JSON.stringify(user),
    });
    const res = await data.json();
    setIsLogin(res.isLogin);
    return res.isLogin;
  }

  const logout = () => {
    setIsLogin(false);
  }

  return (
    <>
    <BrowserRouter>
    {isLogin && <AppBar logout={logout}/>}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login login={login}/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
