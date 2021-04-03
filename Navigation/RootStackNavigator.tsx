import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavi from './TabNavigator';
import CameraPage from '../Screens/Camera';
import ChatRoom from '../Screens/ChatRoom';
import FriendProfile from '../Screens/FriendProfile';
import ParamList from '../interfaces/ParamsList';

const RootStack = createStackNavigator<ParamList>();

const RootStackNavi = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabStack"
        component={BottomTabNavi}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Camera"
        component={CameraPage}
        options={{
          headerShown: false,
          gestureDirection: 'horizontal-inverted',
        }}
      />
      <RootStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="FriendProfile"
        component={FriendProfile}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavi;
