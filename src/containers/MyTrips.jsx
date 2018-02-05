import {
  compose,
  withState,
  lifecycle,
} from 'recompose';
import fire from '../firebase';

import MyTrips from '../components/MyTrips';

const enhance = compose(
  withState('trips', 'setTrips', {}),
  lifecycle({
    componentWillMount() {
      const userAu = fire.auth().currentUser;
      let userId;
      if (userAu) {
        userId = userAu.uid;
      }

      const tripRef = fire.database().ref(`/trips/${userId}`);

      tripRef.once('value', (snapshot) => {
        const trips = snapshot.val();
        let newState = [];
        for (let trip in trips) {
          newState.push({
            id: trip,
            location: trips[trip].tripLocation,
            date: trips[trip].tripDate,
          });
        }
        this.props.setTrips({ newState });
      });
    },
  }),
);

export default enhance(MyTrips);
