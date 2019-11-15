import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home'
import TestStarWars from './TestStarWars';

const RootStack = createStackNavigator({ 
    Home: Home,
    StarWars: TestStarWars,
},
{
    initialRouteName: 'Home',
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;