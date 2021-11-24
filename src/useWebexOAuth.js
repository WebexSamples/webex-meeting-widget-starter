import { useEffect, useState } from 'react';
import queryString from 'query-string';

/**
 * This function captures the "code" querystring returned from an OAuth call
 * and stores it in react state, then clears the querystring for security.
 * 
 * @returns {Hook}
 */
function useWebexOAuth() {
  const [webexToken, setWebexToken] = useState('');
  const { hash } = window.location;

  
  useEffect(() => {
    if (!webexToken && hash) {
      const parsedHash = queryString.parse(hash);
      // Our access token lives in the `access_token` variable in the hash
      parsedHash['access_token'] && setWebexToken(parsedHash['access_token']);
      
      // Clear any items from the hash that were provided by implicit grant flow
      [
        'access_token',
        'token_type',
        'expires_in',
        'refresh_token',
        'refresh_token_expires_in'
      ].forEach((key) => Reflect.deleteProperty(parsedHash, key));
      window.location.hash = queryString.stringify(parsedHash);
    }
  }, [webexToken, hash]);

  return webexToken;
}

export default useWebexOAuth;