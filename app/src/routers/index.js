import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'

import Main from '../views/Main'
import OutraTela from '../views/OutraTela'
import TerceiraTela from '../views/TerceiraTela'

const stackMain = createStackNavigator({
    Main,
    // OutraTela,
});

const switchNavigate = createSwitchNavigator(
    {
        stackMain,
        OutraTela,
        TerceiraTela,
    },
    {
        initialRouteName: 'stackMain',
        defaultNavigationOptions: {}
    }
);

export default createAppContainer(switchNavigate);