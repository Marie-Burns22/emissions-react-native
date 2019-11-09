import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class Emissions extends Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount(){
    return fetch('https://localhost:5001/api/Emissions')
        .then(response => response.json())
        .then(responseJSON => {
            this.setState ({
                isLoading: false,
                dataSource: responseJSON,
            }, function() {
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <Text>{item.food}, {item.amount} kgs of CO2</Text>}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}