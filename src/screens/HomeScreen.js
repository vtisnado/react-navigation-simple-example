/******************* IMPORT COMPONENTS *******************/
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
} from 'react-native';
/******************* /IMPORT COMPONENTS *******************/

export default class HomeScreen extends Component {
    static navigationOptions = {
        headerLeft: (
                <Button
                title='menu'
                onPress = {() => alert('This is a menu button!')} 
                />
        ),
    };
    render() {
        return (
            /******************* RENDER VISUAL COMPONENTS *******************/
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Second Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Second', {
                        itemId: 86,
                        otherParam: 'Parameter passed from home',
                    });
                }}
                />
            </View>
            /******************* /RENDER VISUAL COMPONENTS *******************/
        );
    }
}

/******************* CSS STYLES *******************/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
/******************* /CSS STYLES *******************/