import React from 'react';
import PropTypes from 'prop-types';

function AddTripForm({
  tripLocation,
  tripDate,
  handleChange,
  addTrip,
}) {
  return (
    <div>
      <h2>Add new Trip</h2>
      <form onSubmit={addTrip}>
        <input type="text" onChange={handleChange} value={tripLocation} />
        <input type="text" onChange={handleChange} value={tripDate} />
        <input type="submit" />
      </form>
    </div>
  );
}

AddTripForm.propTypes = {
  tripLocation: PropTypes.string.isRequired,
  tripDate: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addTrip: PropTypes.func.isRequired,
};

export default AddTripForm;
