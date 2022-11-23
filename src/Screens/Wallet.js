import React, {Component} from 'react';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';

class Wallet extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.text}>Inside Wallet</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    paddingTop: 100,
    fontSize: 40,
  },
});

export default Wallet;
