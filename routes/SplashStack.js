import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Splash from '../screens/Splash'
import Home from '../screens/Home'

const screens = {
    Splash: {
        screen: Splash
    },
    Home: {
        screen: Home
    },
}

const SplashStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        header: null
    }
})

export default createAppContainer(SplashStack);