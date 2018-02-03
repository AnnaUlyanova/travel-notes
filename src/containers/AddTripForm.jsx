import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import fire from '../firebase';

import AddTripForm from '../components/AddTripForm';

const enhance = compose(
  withState('newTripLocation', 'setNewTripLocation', ''),
  withState('newTripDate', 'setNewTripDate', ''),
  withHandlers({
    handleChange: ({ setNewTripLocation, setNewTripDate }) => (e) => {
      setNewTripLocation(e.target.value);
      setNewTripDate(new Date().getTime());
    },
    addTrip: ({
      setNewTripLocation, setNewTripDate, newTripLocation, newTripDate,
    }) => (e) => {
      e.preventDefault();
      const user = fire.auth().currentUser;
      let userId;
      if (user) {
        userId = user.uid;
      }
      const tripRef = fire.database().ref(`/trips/${userId}`);
      const trip = {
        newTripLocation,
        newTripDate,
      };
      tripRef.push(trip);
      setNewTripLocation('');
      setNewTripDate('');
    },
  }),
);

export default enhance(AddTripForm);
