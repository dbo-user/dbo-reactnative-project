import React, { Component } from 'react';
import { Text, View } from 'react-native';


class About extends Component {
    
    static navigationOptions = {
        title: 'About'
    } // end navigationOptions
    
    render() {
        return (
            <View>
                <Text style={{margin:24}}>
                    ABOUT PAGE
                </Text> 
                
            </View>
            
          ); // end return
    } // end render

} // end class About

export default About;
