import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Home extends Component {
    
    static navigationOptions = {
        title: 'Home'
    } // end navigationOptions
    
    render() {
        return (
            <View>
                <Text style={{margin:24}}>
                    HOME PAGE
                </Text> 
                
            </View>
            
          ); // end return
    } // end render

} // end class Home

export default Home;
