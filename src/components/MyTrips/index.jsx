import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import {
  isEmpty,
  map,
} from 'ramda';

import Trip from '../Trip';

function MyTrips({ trips }) {
  if (isEmpty(trips)) {
    return (
      <div>Seems you don`t have any trips yet </div>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <h1>My Trips</h1>
        <ul>
          {map(trip => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <li key={trip.id}><Link to={trip.id}>{trip.location}</Link></li>
              ), trips.newState)}
        </ul>

        <Route
          path="/:id"
          component={Trip}
        />

      </div>
    </BrowserRouter>
  );
}

MyTrips.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  trips: PropTypes.object.isRequired,
};

export default MyTrips;
