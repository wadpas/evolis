import React from 'react'
import { Stack } from 'expo-router'
import GlobalProvider from '../context/GlobalProvider'
import { StatusBar } from 'expo-status-bar'
import '../global.css'

const RootLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(auth)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='search/[query]'
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar
        backgroundColor='#030712'
        style='light'
      />
    </GlobalProvider>
  )
}

export default RootLayout
