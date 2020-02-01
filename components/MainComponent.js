import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';

class Main extends Component {

    render() {
        return (
            <View>
                <Text style={{margin:24}}>
                    MAIN PAGE
                </Text> 
                <Home />
                <About />
                <Portfolio />
                <Contact />
            </View>
          ); // end return
    } // end render
} // end class Main

export default Main;