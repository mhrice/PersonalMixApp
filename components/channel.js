import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Slider, Image} from 'react-native-elements';
// import Slider from "react-native-slider";
import { LinearGradient } from 'expo';
import Fader from "../assets/fader2.png";
const gradientColors = ["transparent", "#F40000", "#429321" ]
// const gradientLocations = [0, 0.1, 0.20];
export default class Channel extends React.Component {
  constructor(){
    super();
    this.state = {volume: 0.5, solo: false, mute: false};
  }
  handleSoloButtonPress = () => {
    this.setState({solo: !this.state.solo});
  }
  handleMuteButtonPress = () => {
    this.setState({mute: !this.state.mute});
  }
  onSliderChange = val => this.setState({volume: val});  
  render() {
    // let testVolume = 0.9;
    let testVolume = 1 - this.state.volume;
    // console.log(this.state);
    let gradientLocations;
    if(1 - testVolume < 0.2){
      gradientLocations = [0, 1 - testVolume, 0.2];
    } else {
      gradientLocations = [1 - testVolume, 0, 0.2];
    }
    let soloButtonColor;
    let muteButtonColor;
    if(this.state.solo){
      soloButtonColor = "#cdd100";
    } else {
      soloButtonColor = "#4388D6";
    }
    if(this.state.mute){
      muteButtonColor = "red";
    } else {
      muteButtonColor = "#4388D6";
    }
    return (
      <View style={styles.container}>
          {/* <Image source={{uri: "../assets/fader2.png"}} style={{ width: 80, height: 40 }}/> */}
        <Button 
          title="Solo" 
          titleStyle={{"fontSize": 12}} 
          containerStyle={{margin: 4}} 
          buttonStyle={{borderRadius: 10, padding: 4, backgroundColor:soloButtonColor}}
          onPress={this.handleSoloButtonPress}
        />
        <View style={styles.volumeContainer}>
            <Slider 
            value={this.state.volume} 
            onValueChange={this.onSliderChange} 
            step={0.1}     
            orientation="vertical"
            style={styles.fader}  
            trackStyle={styles.faderTrack}   
            thumbStyle={styles.faderThumb}
            maximumTrackTintColor={'#3f3f3f'}
            thumbImage={"../assets/fader2.png"}
            >
            </Slider>
            <View style={styles.vcaBackground}>
              <LinearGradient colors={gradientColors} locations={gradientLocations} style={styles.vca}></LinearGradient>
            </View>
        </View>
        <Button 
          title="Mute" 
          titleStyle={{"fontSize": 12}} 
          containerStyle={{margin: 4}} 
          buttonStyle={{borderRadius: 10, padding: 4, backgroundColor:muteButtonColor}}
          onPress={this.handleMuteButtonPress}
          />
        <Text style={styles.scribble}>{this.props.trackName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'stretch',
  },
  volumeContainer: {
    margin: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  fader: {
    flexDirection: "column",
    padding: 2,
  },
  faderTrack: {
  },
  faderThumb:{
    justifyContent: "center",
    alignItems: "center"
  },
  vcaBackground:{
    padding: 6,
    backgroundColor: "black",
    position: "relative",
  },
  vca: {
    padding: 6,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  scribble: {
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
    fontSize: 16
  }

});