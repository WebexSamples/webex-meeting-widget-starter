import Auth from './OAuthLink';
import useCurrentUri from './useCurrentUri';
import useWebexOAuth from './useWebexOAuth';

import './App.css';

function App() {
  const webexToken = useWebexOAuth();  
  const redirectURI = useCurrentUri();

  return (
    <div className="App">
      <header className="App-header">
        { 
          webexToken ? 
          (
            <div>
              Congratulations, you are logged in to Webex. User's API token is available in the "webexToken" variable.
            </div>
          ) : 
          (
            <Auth 
              clientID={process.env.REACT_APP_WEBEX_CLIENT_ID} 
              loginText="Login to Webex"
              redirectURI={redirectURI}
              webexAPIBaseURL={process.env.REACT_APP_WEBEX_BASE_URL}
            />
          )
        }
      </header>
    </div>
  );
}

export default App;
