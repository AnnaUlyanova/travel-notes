import {
  compose,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose';
import { auth, provider } from '../firebase';

import App from '../App';

const enhance = compose(
  withState('user', 'setUser', null),
  withHandlers({
    login: ({ setUser }) => () => {
      auth.signInWithPopup(provider)
        .then((result) => {
          const { user } = result;
          setUser({ user });
        });
    },
    logout: ({ setUser }) => () => {
      auth.signOut()
        .then(() => {
          setUser(null);
        });
    },
  }),
  lifecycle({
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.props.setUser({ user });
        }
      });
    },
  }),
);

export default enhance(App);
