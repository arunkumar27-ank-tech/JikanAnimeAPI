import React,{useState,useEffect} from 'react'
import fire from './Firebase'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth'
import 'firebase/auth'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './auth/Login';
import Boruto from './Detailpage/Boruto';
import Narutomovie from './Detailpage/Narutomovie';
import Narutoship from './Detailpage/Narutoship';
import Narutolast from './Detailpage/Narutolast';
import Naruto from './Detailpage/Naruto';
import HEader from './components/HEader';
import Nav from './components/Bootstrap';
import Mainpage from './components/Mainpage';
require('firebase/auth')





function App() {
  const [items,setItems]=useState([])
  const[loading,isloading]=useState(true)
  const[user,setuser]=useState('')
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[emailerror,setemailerror]=useState('')
  const[passworderror,setpassworderror]=useState('')
  const[hasaccount, sethasaccount] = useState(false)


  const clearInputs = ()=>{
    setemail('');
    setpassword('');
  }
  const clearErrors = ()=>{
    setemailerror('');
    setpassworderror('');
  }
  const auth = getAuth()

  const handleLogin = ()=>{
    clearErrors();
    
  
    signInWithEmailAndPassword(auth,email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailerror(err.message);
          break;
        case "auth/wrong-password":
          setpassworderror(err.message);
          break;
      }
    })
  }

  const handleSignUp = ()=>{
    clearErrors();
    createUserWithEmailAndPassword(auth,email,password)
    .catch(err=>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setemailerror(err.message);
          break;
        case "auth/weak-password":
          setpassworderror(err.message);
          break;
      }
    })
  }

  const handleLogOut=()=>{
    signOut()
  }

  const authListener=()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        clearInputs()
        setuser(user)
      }
      else{
        setuser('')
      }
    })
  }
  useEffect(()=>{
    authListener()
  },[])


  const fetchEvents = async()=>{
    isloading(true)
    const result = await fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then(res=>res.json())
    
    setItems(result.results.slice(0,5))
    isloading(false)
    
  }
    
  useEffect(()=>{
    fetchEvents()
  },[])
  console.log(items)


  const naru = items.slice(0,1)
  const narutoship = items.slice(1,2)
  const lastnarut = items.slice(2,3)
  const boruto = items.slice(3,4)
  const narumov = items.slice(4,5)
  console.log(naru)



  return (
    <Router>
    <div className="App">
      {user?(
        <div>
        <HEader />
        <Nav/>
        <Route path="/" exact><Mainpage items={items}/></Route>
        <Route path="/Naruto" ><Naruto naru={naru}/></Route>
        <Route path="/Narutoshippuden" ><Narutoship narutoship={narutoship}/></Route>
        <Route path="/lastnaruto" ><Narutolast lastnarut={lastnarut}/></Route>
        <Route path="/Boruto" ><Boruto boruto={boruto}/></Route>
        <Route path="/NarutoMovie"><Narutomovie narumov={narumov}/></Route>
        </div>
    

      ):(
        <Login 
    email={email} 
    setemail={setemail} 
    password={password} 
    setpassword={setpassword}
    hasaccount={hasaccount}
    handleLogin={handleLogin}
    handleSignUp={handleSignUp}
    sethasaccount={sethasaccount}
    emailerror={emailerror}
    passworderror={passworderror}
    />

      )}
    
    
    </div>
    </Router>
  );
}

export default App;
