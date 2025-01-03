import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }: any) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className='w-full space-y-1'>
      <Text className='ml-3 text-white'>{title}</Text>
      <TextInput
        className='p-4 text-white bg-gray-900 rounded-xl'
        value={value}
        placeholder={placeholder}
        placeholderTextColor='#4B5563'
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      {title === 'Password' && (
        <Pressable
          className='absolute right-3 bottom-3'
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            color='#EF4444'
            size={26}
          />
        </Pressable>
      )}
    </View>
  )
}

export default FormField
