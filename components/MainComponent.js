import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import Contact from './ContactComponent';
import { Text, View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
); // end HomeNavigator

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
); // end AboutNavigator

const PortfolioNavigator = createStackNavigator(
    {
        Portfolio: { screen: Portfolio }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
); // end PortfolioNavigator

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
); // end ContactNavigator

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Portfolio: { screen: PortfolioNavigator},
        Contact: { screen: ContactNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
); // end MainNavigator



class Main extends Component {

    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
          ); // end return
    } // end render
} // end class Main

export default Main;