import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator   } from 'react-navigation-stack';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Records from '../Components/Records';
import AuthLoadingScreen from '../Components/AuthLoadingScreen';
import CreateRecord from '../Components/CreateRecord';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },

    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        },

    }

}

const authScreens = {
    Records: {
        screen: Records,
        navigationOptions: {
            header: null,
        },

    },
    CreateRecord: {
        screen: CreateRecord,
        navigationOptions: {
            header: null,
        },

    }

}

const AppStack = createStackNavigator(screens);
const AuthStack = createStackNavigator(authScreens);


const switching = createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )


export default createAppContainer(switching);
