import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Image
        source={{ uri: "https://png.pngtree.com/png-clipart/20230429/original/pngtree-robot-future-artificial-intelligence-transparent-png-image_9123447.png" }}
        style={{ width: "100%", height: 400, marginTop: 50 }}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ color: "", fontSize: 30, fontWeight: "800", textAlign: "center" }}>Welcome to iAriv Chatbot, Great Friend to Chat</Text>
        <Pressable style={{ backgroundColor: "#0286F2", padding: 20, marginTop: 25, borderRadius: 15 }} onPress={() => router.push("/no-session/signin")}>
          <Text style={{ color: "white", textAlign: "center" }}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({})