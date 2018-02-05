import React from 'react';
import PropTypes from 'prop-types';

const AddNote = ({ addNote, handleChange, noteText }) => {
  return (
    <div>
      <h2>Add Note to a trip</h2>
      <form onSubmit={addNote}>
        <input type="text" onChange={handleChange} value={noteText} />
        <input type="submit" />
      </form>
    </div>
  );
};

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  noteText: PropTypes.string.isRequired,
};

export default AddNote;