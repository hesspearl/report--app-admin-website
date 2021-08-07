import React from 'react';
import ShowDetails from './Screens/ShowDetails'
import './App.css';
import Login from "./Screens/login"
import{BrowserRouter , Route ,Switch} from 'react-router-dom'



function App() {
  
  return (
   <BrowserRouter>
<Switch>
 
       <Route 
       path="/"
       exact
       component={Login}
       />
       <Route
        path="/reports"
        exact
        component={ShowDetails}/>
     </Switch>
   </BrowserRouter>
    
    
     
   

  );
}

export default App;