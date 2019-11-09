import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Emissions from './Emissions';
import TestStarWars from './TestStarWars';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Food Emissions App for AP Environmental Science</Text>
      {/* <Emissions /> */}
      <TestStarWars />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
