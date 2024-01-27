import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential)
  }
  useEffect(() => {
    /* global google */
    if (google && google.accounts && google.accounts.oid) {
      google.accounts.oid.initialize({
        client_id: "747518615904-sie0uv77qmucbk16rn9o4o0olg11u58o.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    } else {
      console.error("Google Sign-In library not properly loaded.");
    }
  }, []);
  

  return (
    <div className="App">
      <div id='signInDiv'></div>
    </div>
  );
}

export default App;
