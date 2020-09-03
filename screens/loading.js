import React, { Component } from 'react';
import { View, StyleSheet,ActivityIndicator} from 'react-native'

class LoadingScreen extends React.Component{

  static navigationOptions={
    headerShown:false
  }
  
  constructor() {
    super();
    this.state={
      showMe:true
    }
  }

  componentWillMount(){         //loading screen for 2 seconds

    setTimeout(()=>{
      this.setState({showMe:false})
      },
      2000)

  }

  render()
  {
    return(
      this.state.showMe 
      ? <View style={styles.container}>
      <ActivityIndicator size="large" /> 
      </View>
      : this.props.navigation.navigate('Login') 
    )
  }
}

const styles=StyleSheet.create({

  container:{
    marginTop:300
  }


})

export default LoadingScreen