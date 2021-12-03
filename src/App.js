import Auth from './OAuthLink';
import WebexMeeting from './WebexMeeting';
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
            <WebexMeeting webexToken={webexToken} />
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
