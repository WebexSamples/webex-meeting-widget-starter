import { useEffect, useState } from 'react';

/**
 * Gets the current URL and encodes it for use as a redirect uri
 * @returns {Hook}
 */
function useCurrentUri() {
  const [currentUri, setCurrentUri] = useState('');

  useEffect(() => {
    let redirect_uri = `${window.location.protocol}//${window.location.host}`;

    if (window.location.pathname) {
      redirect_uri += window.location.pathname;
    }
    
    // Remove trailing slash because Webex OAuth doesn't like trailing slashes
    redirect_uri = redirect_uri.endsWith('/') ? redirect_uri.slice(0, -1) : redirect_uri;

    setCurrentUri(encodeURIComponent(redirect_uri));
  }, []);

  return currentUri;
}

export default useCurrentUri;