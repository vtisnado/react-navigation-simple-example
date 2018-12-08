/******************* IMPORT COMPONENTS *******************/
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View,
    Button,
} from 'react-native';
/******************* /IMPORT COMPONENTS *******************/

export default class DetailScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Second Screen',       
    };
    
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            /******************* RENDER VISUAL COMPONENTS *******************/
            <View style={styles.container}>
                <Text>Second Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Second Screen... again"
                    onPress={() =>
                    this.props.navigation.push('Second', {
                    itemId: Math.floor(Math.random() * 100),
                    })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
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