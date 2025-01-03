import React, { useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { Link, RelativePathString, router } from 'expo-router'

import { useGlobalContext } from '../../context/GlobalProvider'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { singIn } from '@/lib/appwrite'

const logo = require('../../assets/images/logo.svg')

const SingIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setUser, setIsLogged } = useGlobalContext()

  const submit = async () => {
    if (!form.email && !form.password) {
      Alert.alert('Error', 'Please fill in all fields')
    }
    try {
      const user = await singIn(form.email, form.password)
      setUser(user)
      setIsLogged(true)
      router.replace('/home')
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <View className='items-center justify-center h-full p-6 space-y-10 bg-black'>
      <Image source={logo} />
      <View></View>
      <FormField
        title='Email'
        value={form.email}
        placeholder='Enter your email'
        handleChangeText={(e: any) => setForm({ ...form, email: e })}
        keyboardType='email-address'
      />
      <FormField
        title='Password'
        value={form.password}
        placeholder='Enter your password'
        handleChangeText={(e: any) => setForm({ ...form, password: e })}
      />
      <View></View>
      <CustomButton
        title='Sign In'
        handlePress={submit}
        isLoading={isSubmitting}
      />
      <Text className='text-white '>
        Don't have an account?
        <Link
          href={'/sign-up' as RelativePathString}
          className='ml-2 font-bold text-primary'>
          Sign Up
        </Link>
      </Text>
    </View>
  )
}

export default SingIn
