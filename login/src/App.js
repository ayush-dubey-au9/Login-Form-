import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/profile";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import {Provider} from 'react-redux';
import store from './redux/store'

const Error  = ()=>{
  return <div style={{width: "100vw", height: "100vh", background: "none"}}> <div style={{margin: "auto"}}>Page Not Found...</div></div>
}

function App() {
  
  return (
    
    <Provider store={store}>

    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/profile" component={Profile} />


          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
