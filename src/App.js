import './App.css';
import clevertap from 'clevertap-web-sdk'

function App() {

  const cleverTapLogin=()=>{
    clevertap.onUserLogin.push({
      "Site": {
        "Identity": "111111",              // String or number
        "clinicID": "111111",
        "Role":  "TESTER"
      }
    })
  }
  const signinEvent=()=>{
    clevertap.event.push('PORTAL_SIGN-IN', 
          { "name": "TESTER",
            "Category": "Test"
          });
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          CLEVERTAP TEST.
        </p>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"400px"}}>
        <button style={{height:"40px",width:"120px"}} onClick={cleverTapLogin}>Login Event</button>
        <button style={{height:"40px",width:"120px"}} onClick={signinEvent}>Signin Event</button>
        </div>
      </header>
    </div>
  );
}

export default App;
