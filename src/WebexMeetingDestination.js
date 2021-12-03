import { useState } from "react";
import PropTypes from "prop-types";

import './WebexMeetingDestination.css';

function WebexMeetingDestination({onSetDestination}) {
  const [destination, setDestination] = useState('');

  function handleDestinationChange(e) {
    setDestination(e.target.value);
  }

  function handleSaveDestination() {
    onSetDestination(destination);
  }

  return (
    <div className="WebexMeetingDestination">
      <label htmlFor="WebexMeetingDestinationInput">Enter Webex Meeting Destination</label>
      <input id="WebexMeetingDestinationInput" type="text" placeholder="Enter Webex Meeting Destination" value={destination} onChange={handleDestinationChange}></input>
      <input type="button" onClick={handleSaveDestination} value="Save Destination"></input>
    </div>
  )
}

WebexMeetingDestination.propTypes = {
  onSetDestination: PropTypes.func.isRequired
};

export default WebexMeetingDestination;