import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import fire from '../firebase';

import AddNote from '../components/AddNote';

const enhance = compose(
  withState('noteText', 'setNoteText', ''),
  withHandlers({
    handleChange: ({ setNoteText }) => (e) => {
      setNoteText(e.target.value);
    },
    addNote: ({ tripId, noteText, setNoteText }) => (e) => {
      e.preventDefault();

      const user = fire.auth().currentUser;
      let userId;
      if (user) {
        userId = user.uid;
      }
      const noteRef = fire.database().ref(`/trips/${userId}/${tripId}`);
      const note = {
        noteText,
      };
      noteRef.push(note);
      setNoteText('');
    },
  }),
);

export default enhance(AddNote);