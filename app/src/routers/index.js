import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'

import Main from '../views/Main'

const stackMain = createStackNavigator({
    Main
});

const switchNavigate = createSwitchNavigator(
    {
        stackMain
    },
    {
        initialRouteName: 'stackMain',
        defaultNavigationOptions: {}
    }
);

export default createAppContainer(switchNavigate);