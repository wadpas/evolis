import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Link href='/(tabs)'>Home</Link>
    </View>
  )
}

export default App
