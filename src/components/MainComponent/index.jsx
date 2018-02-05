import React from 'react';

import AddTripForm from '../../containers/AddTripForm';
import MyTrips from '../../containers/MyTrips';

function MainComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <MyTrips />
      <AddTripForm />
    </div>
  );
}

export default MainComponent;
