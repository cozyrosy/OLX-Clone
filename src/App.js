import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router ,Route } from  'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create'
function App() {
  const {user,setUser} = useContext(AuthContext)
  const{firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
<Post>
    <Router >
    <Route exact path ='/' >
      <Home />
    </Route>
    <Route exact path ='/signup'  >
      <Signup  />
    </Route>
    <Route exact path ='/login' >
      <Login/>
    </Route>
    <Route exact path ='/create' >
      <Create/>
    </Route>
    <Route exact path ='/view' >
      <View/>
    </Route>
    </Router>
</Post>
    </div>
  );
}

export default App;
