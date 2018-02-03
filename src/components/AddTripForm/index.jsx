import React from 'react';
import PropTypes from 'prop-types';

function AddTripForm({
  newTripLocation,
  newTripDate,
  handleChange,
  addTrip,
}) {
  return (
    <div>
      <h2>Add new Trip</h2>
      <form onSubmit={addTrip}>
        <input type="text" onChange={handleChange} value={newTripLocation} />
        <input type="text" onChange={handleChange} value={newTripDate} />
        <input type="submit" />
      </form>
    </div>
  );
}

AddTripForm.propTypes = {
  newTripLocation: PropTypes.string.isRequired,
  newTripDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addTrip: PropTypes.func.isRequired,
};

export default AddTripForm;
