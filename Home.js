import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>We have no friends!</Text>
                <Button
                    title="Starwars"
                    onPress={() => this.props.navigation.navigate('StarWars')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});