import React, { Component } from 'react';
import { View,Image} from 'react-native'


class ImageScreen extends React.Component
{
  static navigationOptions={
      
      alignItems:'center',
      header: null,
     }
     
  componentDidMount()   
     {
      setTimeout(() => {this.props.navigation.navigate('Login')
      } , 2000);                                                  //splash screen for 2 seconds
  }
  render()
  {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#f44336' }}>
     
     <Image
      source={{uri:'data:image/png;base64,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'}}
      style={{marginTop:40,height:175,width:175,alignSelf:'center',borderRadius:200}}
     />
  
     </View>
   
    )

  }

 

}



export default ImageScreen