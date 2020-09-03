import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView,ImageBackground,TouchableOpacity} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView ,{Marker} from 'react-native-maps';

class ContactScreen extends Component {
  
    state = {
        location:'',
        geocode:null,
        errorMessage:"",
        latitude1:0,
        longitude1:0,
    };

    componentDidMount(){                            // to get latitude and longitude

      navigator.geolocation.getCurrentPosition(
          position=>{
              
            this.setState({latitude1:position.coords.latitude,longitude1:position.coords.longitude,error:null})
          },
          error=>this.setState({error:error.message}),
          {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
      )

    }

  

  getLocationAsync = async () => {                          // to get location
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.props.navigation.navigate('Login')
    }

    let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
    const { latitude , longitude } = location.coords
    this.getGeocodeAsync({latitude, longitude})
    this.setState({ location: {latitude, longitude}});
  };

  getGeocodeAsync= async (location) => {               //reverse geocoding 
    let geocode = await Location.reverseGeocodeAsync(location)
    this.setState({ geocode})
  }




    render(){
        
      const {location,geocode, errorMessage } = this.state
        let geocode1=JSON.stringify(this.state.geocode)
         
        return (
          <ImageBackground  source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgGBgYHBgcHBgcGBhYGBwcGCQ8ICRAWFREWFhURExMYHSggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NGg8PFSsZFRkrKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAM0A9gMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEF/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1YDGbQAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCCiiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogAIKKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAIAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIKKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAIAoAAAAAAAAAAKgAAAAAAAACoAAAAAAAAACAqAAAAAAKgAqAAqAAAKgAqAAAAAAAAACiACoACCiiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCCCiiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogAIKKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAIIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIACCoogCiAKIAogCiAKIAogCiAKIAogCiAKIAogCiAKIAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k='}} blurRadius={5} style={styles.container}>
            <SafeAreaView style={styles.overlay}>

            <Text style={styles.latlong}>{this.state.latitude1} , {this.state.longitude1}</Text>

              <MapView
              style={styles.map}
              region={{
                latitude:this.state.latitude1,
                longitude:this.state.longitude1,
                latitudeDelta:0.0922,
                longitudeDelta:.0421
              }}>

                <MapView.Marker
                coordinate={{
                  latitude:this.state.latitude1,
                  longitude:this.state.longitude1,
                }}
                  />
               </MapView>

             
              
              <TouchableOpacity onPress={this.getLocationAsync}>
          <Text style={styles.addressbutton}>GET ADDRESS? CLICK HERE</Text>
          
         
         
          </TouchableOpacity>
          <Text style={styles.addresstext}>{geocode1}</Text>

          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Loading')}
              style={{
                height: 40,
                width: 130,
                backgroundColor: '#000',
                borderRadius:20,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop:10
              }}>
              <Text style={{ color: '#FFF' ,textAlign:'center'}}>Logout</Text>
            </TouchableOpacity>
          
          </SafeAreaView>
          </ImageBackground>
        );
      }
};

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    overlay:{
      
      height:'100%',
      width:'100%',
     marginTop:80
    },
    latlong:{
      color:"#000",
      fontWeight:"bold",
      fontSize:18,
      textAlign:'center'
     
    },

    addresstext:{
      color:"#000",
      fontWeight:"bold",
      fontSize:15,
      textAlign:'center',
      
    },

    map:{
      width:'100%',
      height:350,
      marginTop:5
    },
    addressbutton:{
      color:"#000",
      margin:5,
      fontWeight:"bold",
      fontSize:15,
      textAlign:'center',
      textDecorationLine:"underline"
    
    },
    
  });

export default ContactScreen;

