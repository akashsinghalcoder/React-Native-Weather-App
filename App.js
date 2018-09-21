/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,ImageBackground} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class WeatherForecast extends Component
{
  

  render() {
    return (
      <View style={styles.weather}>
     <Text style={styles.bigText}>{this.props.main}</Text>
     <Text style={styles.mainText}>Current Conditions {this.props.description}</Text>
     <Text style={styles.bigText}>{ this.props.temperature}</Text>
     </View>


      
    );
  }



}



export default class App extends Component<Props> {


constructor(props)
{
  super(props);
  this.state={zip:'',main:'',description:'',temperature:''};
  this._handleTextChange = this._handleTextChange.bind(this);

}




_handleTextChange(event) {
console.log(event.nativeEvent.text);

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={yourkey}')
.then((response) => response.json())
.then((responseJSON) => {
this.setState({
main: responseJSON.weather[0].main,
description: responseJSON.weather[0].description,
temperature: responseJSON.main.temp
});
})
.catch((error) => {
console.warn(error);
});







}

  render() {
    let imageuri='https://usercontent2.hubstatic.com/13597605_f496.jpg';
    return (
      
      
      <ImageBackground source={{uri:imageuri}} style={styles.container}>
  
      
     

      <View style={styles.inputcontainer}><Text>Weather for pincode </Text><TextInput style={[styles.zipCode, styles.mainText]}  onSubmitEditing={this._handleTextChange}/>
</View>
 
 
<WeatherForecast main={this.state.main} description={this.state.description} temperature={this.state.temperature}/>
       

  


      </ImageBackground>
    );
  }



}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:'100%',
    height:'100%' ,
      fontWeight: "bold"
  },


   inputcontainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: "bold"
    
  },




weather:{
  flex:1,
  flexDirection:'column',
  justifyContent:'flex-start',
  


},

bigText: {

fontSize: 30,
textAlign: 'center',
margin: 10,
fontWeight: "bold"

},
zipContainer: {
flex: 1,
borderBottomColor: '#DDDDDD',
borderBottomWidth: 1,
marginLeft: 5,
marginTop: 3
},
zipCode: {
width: 50,
height: 50,
},
mainText: {
  

fontSize: 16,
textAlign: 'center',
fontWeight: "bold"
}
});
