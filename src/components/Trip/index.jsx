import React from 'react';
import PropTypes from 'prop-types';

import AddNote from '../../containers/AddNote';

const Trip = ({ match }) => {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
      <h4>Add note</h4>
      <AddNote
        tripId={match.params.id}
      />
    </div>
  );
};

Trip.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default Trip;