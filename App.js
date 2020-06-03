import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import CalendarScreen from './src/screens/CalendarScreen';

const mainNavigator = createStackNavigator({
  Login: LoginScreen,
  Calendar: CalendarScreen
});

const App = createAppContainer(mainNavigator);

export default () => {
  return (
    <App />
  );
}

