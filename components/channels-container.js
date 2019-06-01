import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Channel from "./channel";
export default class ChannelsContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Channel trackName="Drums"/>
        <Channel trackName="Bass"/>
        <Channel trackName="Guit1"/>
        <Channel trackName="Guit2"/>
        <Channel trackName="Keys"/>
        <Channel trackName="Vox1"/>
        <Channel trackName="Vox2"/>        
        <Channel trackName="Vox3"/>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 0
  },
});
