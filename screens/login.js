import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import firebase from './firebase';

class Inputs extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  Login = (email, password) => {                //firebase authorization 
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>
          this.props.navigation.navigate('Contact', {
            email: this.state.email,
            name: this.state.displayName
          }),
          
        )
        .catch(error => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <SafeAreaView style={{alignItems:'center'}}>
      <View style={{  alignItems: 'center',justifyContent:'center' }}>
        <Image
          resizeMode="contain"
          style={{ height: 180, width: 180 ,marginTop:50}}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEEklEQVRoge2ZXWhbZRjHf885bdom6VY3GQgKvZgWVFSITStbRzTdOpGBN/HCb1BRtwsd7kKZaIVdCLvwAx2CnTKYinglwxVr2xXsLGsmguInZWyZiEXbufakadec83ghkzqaJjnvG+lF/5fJ8/8/z4/3nPe8J4E1rakmklqEaiJR7613u0SkA7RNocVR8XH0t0B1NO7HPpWRkXmbPa2CaCJRn29x9wLPAZtWKD2ngd7TfCL7va3e1kAu9tyxwSn6nwl0Vmj5EziuypHm4fFh0/5WQDSTcfPTZwdBUqH8wjvxwfHdAhp2BiescanyU7n7w0IAiPJU/q6OZ0xmsAIC+ohxhOgLmkjUh7Ubg+iOW2IIW01zgE1zLc5tYc3GIIVi5CagwTQHAJVbw1qNQQLHuco047IUNob1ml9aSNw0w4bMb/ZAL1iYAwAR/grrNQdRnTTOuByFngvrNQa51Oicx+BBtlSOS+gjizHIxv5TM8AvpjnAr9GB7PmwZksPRE5byPjcxGy+a6VSdcB1pjnAtWpw9jMG8dxCF7DNNAfomb3z9hvCmo1BHDRmmvFvluOGPiHYeCBmsbNrLcQiUz+HNRuDxIdOTYJ8YJojaJ/0TyyE9VvZtWKRqcdBjoYOUHk16seeNZnBCoj0TyxIIJ+E9dc5wbsyMlI0mcHWc4TovHwB1Z+VRJhoHMyeMe1vDUTGxgoCB6v1Baqv2ehvDQQgGvVfB36vwpKLRy4cttHbKogc+3pOlLcqrhc9YLJTLZVVEIDA1dFKa6Xo9Nvqax1EAqfiF62iqwVbfWsAIq2V1tYFzmZbfa2D4Pg7Ki313WCXtba2gqa7E+sB/EA/orKzly+4HwPMpBJXm/Y3Brm4veN6L53si6iby/ckrll34vRJ4MNyPoW++ODYd4VUZ6vjujkvnTzqbW//f3+gUxAv3b7TS3ccdwP9CXgMWBcs1r0CsBCR3aJysmSAMBCfc/cC+G5wAGgCHiCQb2bTya+8dPuDevfmqo70Vb2RaSbj5qfOPoTI80BbibJH40PjRzSVqvPcwpMCD4O2AarwoyP6fnRr9rD0Esx2tz8tKodK5EwKvBl159+QgW/z1kBmuztTosHbwI1lSn2U/bFt4well2C5As1k3Lnp3H5FX6b8VTEJui8+lF3xdF0WRHtxvNHkS6K8CLjl6pfoB0UOITIcd+ZyAN5iQysOaUH2ANW+1r4X86N7Sv1lVxbESyf7+OceWA06Fusav3e5lV5xWfPd7U+weiAAduW/TO5b7ouSK/LHli3NTY2LZwDjPd6yZooLkdaW0dH/HIVKrki0qZhh9UEArKtvuHTflR+ucGnpzlpOYyQhfeVHJUFUubm204TXcrOtdLNvqOEsplrNs61pTatSfwPrjkAc9k0IjgAAAABJRU5ErkJggg==',
          }}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" Email"
          placeholderTextColor="#707070"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input1}
          underlineColorAndroid="transparent"
          placeholder=" Password"
          placeholderTextColor="#707070"
          secureTextEntry={true}
          autoCapitalize="none"
        
          onChangeText={this.handlePassword}
        />
        </View>

          <View
            style={{ justifyContent: 'center', alignItems: 'center',marginTop:30 }}>
            <TouchableOpacity
              onPress={() => this.Login(this.state.email, this.state.password)}
              style={{
                height: 50,
                width: 130,
                backgroundColor: '#f44336',
                borderRadius:15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#FFF' }}>Sign In</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}
              >
              <Text style={{ color: '#f44336',textAlign:'center' ,marginTop:5,textDecorationLine:"underline"}}>Not a Member Yet? Sign Up</Text>
            </TouchableOpacity>

            <View style={{justifyContent:'space-around',flexDirection:'row'}}>

            <View style={{height:2,width:70,backgroundColor:"#707070",alignSlef:'center',marginTop:40,margin:5}}/>
            <Text style={{marginTop:30,color:"#707070",fontSize:14}}>or</Text>
            <View style={{height:2,width:70,backgroundColor:"#707070",alignSlef:'center',marginTop:40,margin:5}}/>

            </View>

            <View style={{justifyContent:'space-between',flexDirection:'row',marginTop:20}}>
            <TouchableOpacity
              
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#7e7e7e',
                borderRadius:25,
                margin:10,
               
              }}>
              <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFEklEQVRoge2ZW2gcVRjH/2c22SQ1aZLNRXNraFATvKFs0QdfTPTFiKCIQUwFwZQYkqIY8cELrKLFF2+0G4yVgpBgm4q0oO2DJvpgVUICKohtUFuSzcZoLrK7uezOzPn7kLRddmZ2ZjJJfGg+WHZ2zjnf/P7nfOc7c84CO7Zj17aJTfEyRF/TSvxuAM0SCIJsAlFFsJAECCQoGQVwgeQ4wZFL04FRhIT0+mhPAm77dLlO12Q3yf0kawCAJEgAWPte+xAmZRFKDug5Ijx9oCyyrQJuHIpX+JN4k8DTJPwWgNng0+4jBfKY7lNfi3ZWz225gFsHEk9KicMQDGQHdASfXmeeFD3RnorjWyIg2M/c1cJEn5SiwwjiGf5qHaB/JrfyIDqFumkCgv3ctXLd0mckHtxS+Kvtz/jy5ePRzuplOzbFAXzuNsMDQKu2itMI/er3LGC1MNG3zfBrZVI8UF5S+oEdX9YQumUw0U6JAS/wCoiWej/urc5FfbGCkjwFKZ1QdSKWIn6MpvDxTyuW7SX5xEJvzQnXApo+iZUJRTkPsHyj8HdW+vBecyH2FvssO+lcJIXHPl+08E0AWEhRNMZfNE+xliGkKOKQF/i7Kn0Yenh3Vvh0yxJ2gRzK1y05zW7eMbBcu75IbQjeJ4jD9xfB73OWpR3MmY7St6N7HAtQKXvoYYVtbchDbZFtfkgTkBUeJP1S0bvM2uYY7oSokIl2L9mmuS7XFHQypqN3OI5f/lavkKuSdvBrzyCfwhBfRZvQswpo2hu/h0TtRuFJ4PYKY78AwAvDcXw3lbRtb7FC1+y+GAnGgNF0n2bj3OwFniTKC4xu/1qSOLdReF7+LVsy/ZoJ2Od1kSryGyfvZEwHPcADACWCtgIkebMXeJJQTJJPPCm9wRMgZGOmX0OwkqjyAr9+aTBJR9kmax1SVGX6NQmh9W3ghuEtFMArPACwKNOj2Qi4cvzD/oAh5s1C6L76PEw8e73h/snfVvDS14tO4E1H15jviATJgBN4ACjOE6aTNtNyFaAk3zjg0bjmGJ5kPLO92SSecQpPsy5xaRPzmlN4CGDGVgCICa8T1o39vqA6ggcACVywFUBwzFW28ACvSeDPRc0R/Pr1WKYP4yQGR4zA1pP6ua9iyLncDetlRx8qMWw0fp5V8f5o/EodAFjViKQmncKDCkZsBVyaDozuqVqYAllnB08CZ/9YNZR9xBKIDAWzSzpOnV92M2EzO29SlQ3jmbzGORASEpKDTuCtyqzMAzwADJodRZq+tOs5Ikwi5eWVejPhCSZTqhY282sqYPpAWQTksc2CB4x1HMOTkMRRvNU47VgAANDvf4XknFv47CHkHp7EvC50d3tiAIh0FC+Q4qBbeLvFzSU8CHYh1Gh56Jt14xrtqThOoP9/hA/rb9x0MptP2533TGVlN8FTTuEtRbiEB/ClrkSet+OzPzpoE7ovT7aDPOPi4Wb8zuHJLzRlVxtCzZp3AQCindXLswU3PELBD+3h3Wei9PYEw5ov8ihC9ifTgNnrtJV1CnUO6Aq8M/2tAhyRRPlGFrIs8P8Q7LaL+Uxzfvq0bgu9NSeSSTaR7AOQdLMWWC1SEjiiKckmt/CAmxFIs/jLtfMAusvenTqkaegB2E6iziX8FIABVdXDVouUE9ucv1lDVHYXRPaRsoUSwe+fqWoN5Iv80gKfIgTw74qUwxeXFztOz31DcowCI6psGN+Mv1l3bMeudfsPP8EkRZOLDr8AAAAASUVORK5CYII='}}
              style={{height:40,width:40,marginTop:5,alignSelf:'center'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              
              style={{
                height: 50,
                width: 50,
                backgroundColor: '#7e7e7e',
                borderRadius:25,
               margin:10
                
              }}>

             <Image source={{uri:'data:image/png;base64,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'}}
              style={{height:40,width:40,marginTop:5,alignSelf:'center'}}></Image>
              
            </TouchableOpacity>
            </View>

          </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 40,
    width: 300,
    alignSelf: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25,
    padding:10
  },
  input1: {
    marginTop: 15,
    height: 40,
    width: 300,
    alignSelf: 'center',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius:25,
    padding:10
  },


});

export default Inputs
