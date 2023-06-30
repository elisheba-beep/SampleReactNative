import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { FeedbackForm } from "./components/FeedbackForm";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import { WelcomeScreen } from "./src/WelcomeScreen";
import LoginScreen from "./src/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./src/MenuScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Welcome from "./src/Welcome";
import Newsletter from "./src/Newsletter";
// import { createDrawerNavigator } from "@react-navigation/drawer";



const Tab = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="NewsLetter" component={Newsletter}/>
        </Stack.Navigator>
        {/* <LittleLemonHeader /> */}
        {/* <Tab.Navigator

          initialRouteName="Welcome"
          screenOptions={({route})=>({
            tabBarIcon:({focused, color,size})=>{
              let iconName;

              if(route.name === 'Welcome'){
                iconName == focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              }else if(route.name === 'Menu') {
                iconName =  'ios-list';
              }return <Ionicons name={iconName} size={size} color={color}/>
            },tabBarActiveTintColor:'tomato', tabBarInactiveTintColor:'grey',
          })
        }
        >
          <Tab.Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator> */}
        {/* <Drawer.Navigator >
          <Drawer.Screen name='Welcome' component={WelcomeScreen}/>
          <Drawer.Screen name='Login' component={LoginScreen}/>
        </Drawer.Navigator> */}
      </View>
      {/* <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: {
    backgroundColor: "#333333",
  },
});
