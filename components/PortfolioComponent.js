import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Portfolio extends Component {
    
    static navigationOptions = {
        title: 'Portfolio'
    } // end navigationOptions
    
    render() {
        return (
            <View>
                <Text style={{margin:24}}>
                    PORTFOLIO PAGE
                </Text> 
                
            </View>
            
          ); // end return
    } // end render

} // end class Portfolio

export default Portfolio;
