import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  function callapi() {
    try {
      axios.get("http://localhost:4000/").then(console.log("Hey! this is not protected"))
    }
    catch {
      console.log("error")
    }

  }
  async function callprotectedapi() {
    const token = await getAccessTokenSilently();
    console.log(token);
    try {
      const token = await getAccessTokenSilently();
      // console.log(token);
      const response = await axios.get("http://localhost:4000/protected", {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
      )
      console.log("success in getting protected route")
    }
    catch {
      console.log("error :(")
    }
  }

  return (
    <div className="App">
      <p>
        hi
      </p>
      <ul>
        <li><button onClick={loginWithPopup}> login with popup </button></li>
        <li><button onClick={loginWithRedirect}> login with redirect  </button></li>
        <li><button onClick={logout}> logout  </button></li>
      </ul>
      <h3> user is {isAuthenticated ? "Logged in" : "not logged in"} </h3>
      <ul>
        <li>
          <button onClick={callapi}>
           call api route
          </button>
        </li>
        <li>
          <button onClick={callprotectedapi}>
            call protected api route
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
