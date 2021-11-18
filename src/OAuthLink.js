import PropTypes from 'prop-types';

function OAuthLink({clientID, loginText, redirectURI, webexAPIBaseURL}) {
  
  
  return (
    <>
      <a
      href={`${webexAPIBaseURL}?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=spark%3Aall%20spark%3Akms`}
      >
        {loginText}
      </a>
    </>
  );
}

OAuthLink.propTypes = {
  clientID: PropTypes.string.isRequired,
  loginText: PropTypes.string.isRequired,
  redirectURI: PropTypes.string.isRequired,
  webexAPIBaseURL: PropTypes.string.isRequired
};

export default OAuthLink;