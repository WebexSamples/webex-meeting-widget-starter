import { useState } from 'react';
import PropTypes from 'prop-types';
import {WebexMeetingWidget} from '@webex/widgets';

import WebexMeetingDestination from './WebexMeetingDestination';

import '@webex/widgets/dist/webexWidgets.css';
import './WebexMeeting.css';

function WebexMeeting({webexToken}) {
  const [destination, setDestination] = useState(null);

  function handleSetDestination(destinationToSet) {
    setDestination(destinationToSet);
  }

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
