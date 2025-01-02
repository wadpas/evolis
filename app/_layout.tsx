import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import '../global.css'

export default function RootLayout() {
  return (
    <>
      <Stack></Stack>
      <StatusBar
        backgroundColor='#020617'
        style='light'
      />
    </>
  )
}
