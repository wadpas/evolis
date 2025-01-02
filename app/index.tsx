import { View, Text, Image, SafeAreaView, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CustomButton from '@/components/CustomButton'
import { router, Href } from 'expo-router'

const logo = require('../assets/images/logo.svg')
const main = require('../assets/images/main.png')

const App = () => {
  return (
    <SafeAreaView className='h-full bg-black'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center flex-1 px-6 justify-evenly'>
          <Image source={logo} />
          <View className='items-center'>
            <Image source={main} />
            <Text className='text-3xl text-center text-white'>Open up the future now!</Text>
          </View>
          <CustomButton
            label='Sign in'
            onPress={() => router.push('/(auth)/sing-in' as Href)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
