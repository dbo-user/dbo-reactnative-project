import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Contact extends Component {
    
    static navigationOptions = {
        title: 'Contact'
    } // end navigationOptions
    
    render() {
        return (
            <View>
                <Text style={{margin:24}}>
                    CONTACT PAGE
                </Text> 
                
            </View>
            
          ); // end return
    } // end render

} // end class Contact

export default Contact;
