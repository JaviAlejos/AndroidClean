import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import FilesList from '../screens/FilesList';

const Main = createStackNavigator(
    {Home, FilesList}, //our screens
    {
        /* We don't want header, 
        so the header config from screens is false */
        defaultNavigationOptions: {
            headerShown: false 
        }
  }
);

export default createAppContainer(Main);