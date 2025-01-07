import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useFocusEffect, useRouter } from 'expo-router'

const index = () => {
  const router = useRouter();

  useFocusEffect(() => {
    router.push("/Screens/welcome")
  })

  return (
    <ImageBackground
      source={require('@/assets/images/splash-icon.png')}
      style={{ flex: 1, justifyContent: "center" }}
    ></ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({})