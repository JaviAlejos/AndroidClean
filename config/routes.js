import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import FilesList from '../screens/FilesList';

const Main = createStackNavigator(
    {Home, FilesList},
    {
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerShown: false 
        }
  }
);

export default createAppContainer(Main);