import { useState } from 'react';
import PropTypes from 'prop-types';
import {WebexMeetingWidget} from '@webex/widgets';

import WebexMeetingDestination from './WebexMeetingDestination';

// This style import gives us all of the styling for the Meeting Widget needed
import '@webex/widgets/dist/webexWidgets.css';

import './WebexMeeting.css';

function WebexMeeting({webexToken}) {
  const [destination, setDestination] = useState(null);

  function handleSetDestination(destinationToSet) {
    setDestination(destinationToSet);
  }

  // The Meeting Widget only needs two things, an auth token and a meeting destination.
  // In this example, we are asking for the user to input the destination.
  // In your codebase, the destination could be already set.
  return (
    <div className="WebexMeeting">
      {destination ? 
        (
          <WebexMeetingWidget
            accessToken={webexToken}
            meetingDestination={destination}
          />
        ) 
        : 
        (
          <WebexMeetingDestination onSetDestination={handleSetDestination} />
        )
      }
    </div>
  )
}

WebexMeeting.propTypes = {
  webexToken: PropTypes.string.isRequired
};

export default WebexMeeting;
