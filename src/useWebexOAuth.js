import { useEffect, useState } from 'react';

import { useQueryParam, StringParam } from 'use-query-params';

/**
 * This function captures the "code" querystring returned from an OAuth call
 * and stores it in react state, then clears the querystring for security.
 * 
 * @returns {Hook}
 */
function useWebexOAuth() {
  const [webexToken, setWebexToken] = useState('');
  const [accessCode, setAccessCode] = useQueryParam('code', StringParam);

  
  useEffect(() => {
    if (accessCode && !webexToken) {
      setWebexToken(accessCode);
      setAccessCode(undefined);
    }
  }, [accessCode, webexToken, setAccessCode]);

  return webexToken;
}

export default useWebexOAuth;