import React ,{useState} from 'react'
import {Button , Spinner , Alert} from 'react-bootstrap'
import firebase from "../firebase"


const LogIn = ({history}) => {

 
  
  const [password, setPassword] = useState("")
  console.log(password)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let  passwordDoc

  const onChangeHandler=async()=>{
     setError(null);
      setIsLoading(true);
  
      try {
  
        await firebase.firestore().collection('admin')
                  
                  .get()
                  .then(snapshot=>{
                 (   snapshot.docs.filter(doc =>{

               passwordDoc= doc.data().password
              
               return passwordDoc
           }
             ))})
              // get the email from database
    if (passwordDoc){
      console.log(passwordDoc)
      if ( password===passwordDoc)

      history.push("/reports")
      setIsLoading(false)
      setPassword("")
  }

  else{
  //  setError("not valid")
    setIsLoading(false)

        
    return(
      <Alert variant="danger" dismissible>
      <Alert.Heading> You got an error!</Alert.Heading>
      <p>
        something wrong , {error}
      </p>
    </Alert>
    )
  }

    
    

      
  
      
  
  
      

     
  

  }catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
}

/*if(firepassword === password)
  {
       return(

       setIsLoading(false) && <ShowDetails/>
       )
  
  }else{
      //  setError("not valid")
        setIsLoading(false)
      }
*/

const inputHandler =(text)=>{

setPassword(text.target.value)

}



  return (
      <div className="LogContainer">
      <div className="LoginContainer">
      <div className="logTitle">
      <h1>Admin Log In</h1>
      </div>
      <h5>Email</h5>
      <form >
          <input className="inputs2"
              type="email"   
          />
          <h5>Password</h5>
          <input  className="inputs2"
              type="Password"
              onChange={inputHandler}
            
          />
         </form>
      <div className="btn">
      {isLoading?  <Button variant="primary" size="lg" disabled>
  <Spinner
    as="span"
    animation="grow"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  Loading...
</Button>:
      <Button variant="outline-primary"
      size="lg"
      onClick={onChangeHandler}
      > log in </Button>}
 </div>
      </div>
      
      </div>
  )
}

export default LogIn;