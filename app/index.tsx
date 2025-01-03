import { View, Text, Image, SafeAreaView, Button } from 'react-native'
import { router, Href, Redirect } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider'
import CustomButton from '@/components/CustomButton'

const logo = require('../assets/images/logo.svg')
const main = require('../assets/images/main.png')

const App = () => {
  const { isLoggedIn, isLoading, user } = useGlobalContext()

  if (!isLoading && isLoggedIn) {
    return <Redirect href='/home' />
  }

  return (
    <View className='items-center h-full p-6 bg-black justify-evenly'>
      <Image source={logo} />
      <View className='items-center'>
        <Image source={main} />
        <Text className='text-3xl text-center text-white'>Open up the future now!</Text>
      </View>
      <CustomButton
        title='Get Started'
        handlePress={() => router.push('/(auth)/sign-in' as Href)}
      />
    </View>
  )
}

export default App
