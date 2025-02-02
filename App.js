import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import ChatScreen from "./containers/Chat";
import Icon from "./components/Icon";

const ChatNavigator = createStackNavigator({
	Messages: {
		screen: MessagesScreen,
		navigationOptions: {
			header: null,
		}
	},
	Chat: {
		screen: ChatScreen,
		navigationOptions: {
			header: null,
		}
	},
});

ChatNavigator.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Chat' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const App = createBottomTabNavigator(
	{
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="explore" />
						</Text>
					);
				}
			}
		},
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
		},
		Chat: {
			screen: ChatNavigator,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="chat" />
						</Text>
					);
				}
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="user" />
						</Text>
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#7444C0",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 14,
				textTransform: "uppercase",
				paddingTop: 10
			},
			style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				paddingVertical: 30,
				height: 60,
				marginBottom: 0,
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);

export default createAppContainer(App);
