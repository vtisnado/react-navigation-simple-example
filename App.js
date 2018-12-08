/******************* IMPORT COMPONENTS *******************/
import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
/******************* /IMPORT COMPONENTS *******************/

// Uncomment this block if you want to use a logo image
/*
class LogoTitle extends Component {
    render() {
        return (
        <Image
            source={require('./assets/YOUR-IMAGE')}
            style={{ width: 62, height: 46 }} // The size will vary acoording to your image
        />
        );
    }
}
*/

/******************* NAVIGATOR CONFIG *******************/
const AppNavigator = createStackNavigator({
        Home: HomeScreen,
        Second: SecondScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
        headerTitle: 'React Navigation Example',
        //headerTitle: <LogoTitle />, // Uncomment this line if you want to use a logo image
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});
const AppContainer = createAppContainer(AppNavigator);
/******************* /NAVIGATOR CONFIG *******************/

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <AppContainer />;
    }
}
