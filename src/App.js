
import {React,useState} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin"
}
const[user, setUser] = useState({ name : '', email: '' });
const [error, setError] = useState('')

const Login = (details) => {
    if(details.email===adminUser.email && details.password===adminUser.password){
        console.log('Logged in as Admin');
        setUser(
            {name:details.name,
            email:details.email}
        )
    }
    else{
        console.log("Details don't match");
        setError("Details don't match");
    }
    console.log(details);
}

const Logout = () => {
    console.log("Logout")
    setUser({ name : '', email: '' });
}

  return (  

    // <>
    //   <Navbar/>
    //   <Home/>
    //   <About/>
    //   <Contact/>
    //   <Post/>
    // </>

  <>  
    <BrowserRouter>
      <div className='App'>
      {(user.email!=="")?(
                    <div className='welcome'>
                            <Navbar/>
                            <Switch>
                              <Route exact path = '/' component={Home}/>
                              <Route path = '/about' component={About}/>
                              <Route path = '/contact' component={Contact}/>
                              <Route path = '/post' component={Post}/>
                            </Switch> 
                            <button className='btn' onClick={Logout}>Logout</button>
                    </div>
                    
                ):(
                    <LoginForm Login={Login} error={error}/>
                ) 
            }    
      
      </div>
    </BrowserRouter>
  </>   

  )
}

export default App

