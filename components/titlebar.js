import React from 'react';
import { Header } from "react-native-elements";
import { StyleSheet, Text, View } from 'react-native';

export default class TitleBar extends React.Component {
  render() {
    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Personal Mix v1.0.1', style: { color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: "center",
    // flexDirection: "row",
    // marginTop: 10,
    
  },
});
