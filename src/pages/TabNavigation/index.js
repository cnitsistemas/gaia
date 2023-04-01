import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../../components/Icons';
import Colors from '../../constants/Colors';
import ColorScreen from '../../screens/ColorScreens';
import * as Animatable from 'react-native-animatable';
import Home from '../Home';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: Home },
  { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'heart-plus', inActiveIcon: 'heart-plus-outline', component: ColorScreen },
  { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'timeline-plus', inActiveIcon: 'timeline-plus-outline', component: ColorScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: ColorScreen },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: .5 }, 1: { scale: 1.5 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
    }
  }, [focused, viewRef])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.darkGray} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})