import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import FlatScreen from './src/Screens/FlatScreen';
import ImageScreen from './src/Screens/ImageScreen';
import Assignment from './src/Screens/AssignmentScreen';
import ColorCounter from './src/Screens/ColorCounter';
import CounterScreen from './src/Screens/CounterScreen';
import SearchScreen from './src/Screens/SearchScreen';
import LoginScreen from './src/Screens/LoginScreen';
import MainScreen from './src/Screens/MainScreen';

const navigator = createStackNavigator(
{
	Home: HomeScreen,
    Flat: FlatScreen,
    Image: ImageScreen,
    Assignment: Assignment,
    Color: ColorCounter,
    Counter: CounterScreen,
    Search: SearchScreen,
    Login: LoginScreen,
    Main : MainScreen,

},
{
	initialRouteName: "Home"
}

);
export default createAppContainer(navigator);