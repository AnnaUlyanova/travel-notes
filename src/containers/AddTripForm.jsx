import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import fire from '../firebase';

import AddTripForm from '../components/AddTripForm';

const enhance = compose(
  withState('tripLocation', 'setTripLocation', ''),
  withState('tripDate', 'setTripDate', ''),
  withHandlers({
    handleChange: ({ setTripLocation, setTripDate }) => (e) => {
      setTripLocation(e.target.value);
      setTripDate(new Date().getTime());
    },
    addTrip: ({
      setTripLocation, setTripDate, tripLocation, tripDate,
    }) => (e) => {
      e.preventDefault();
      const user = fire.auth().currentUser;
      let userId;
      if (user) {
        userId = user.uid;
      }
      const tripRef = fire.database().ref(`/trips/${userId}`);
      const trip = {
        tripLocation,
        tripDate,
      };
      tripRef.push(trip);
      setTripLocation('');
      setTripDate('');
    },
  }),
);

export default enhance(AddTripForm);
