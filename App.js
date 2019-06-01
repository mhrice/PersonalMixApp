import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChannelsContainer from "./components/channels-container";
import TitleBar from "./components/titlebar";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleBar/>
        <ChannelsContainer/>
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
    alignItems: "flex-start",
    flexDirection: "column",
    // margin: 10,
    backgroundColor: "#484645"
    
  },
});
