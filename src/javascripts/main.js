// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import initialScreen from './components/initialScreen';
import domEvents from './helpers/domEvents';

import '../styles/main.scss';

const init = () => {
  initialScreen();
  domEvents();
};

init();
