import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';

const Main = createStackNavigator(
    {Home},
    {
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerShown: false 
        }
  }
);

export default createAppContainer(Main);