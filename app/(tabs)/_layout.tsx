import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ef4444',
        tabBarStyle: {
          backgroundColor: '#25292e',
          height: 52,
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='about'
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
