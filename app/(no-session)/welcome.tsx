import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const Welcome = () => {
  const router = useRouter();
  return (

    <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
      <View style={{ marginTop: "10%" }}>
        <Text style={{ fontSize: 40, fontWeight: "800", color: "white", textAlign: "center" }}>iAriv Chatbot</Text>
      </View>
      <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 30, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
      <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "600", textAlign: "center" }}>Welcome Back!</Text>
        </View>
        <View>
          <Image
            source={{ uri: "https://png.pngtree.com/png-clipart/20230429/original/pngtree-robot-future-artificial-intelligence-transparent-png-image_9123447.png" }}
            style={{ width: "100%", height: 300, marginTop: 30 }}
          />
          <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
            <Text style={{ color: "", fontSize: 30, fontWeight: "800", textAlign: "center" }}>Welcome to iAriv Chatbot, Great Friend to Chat</Text>
            <Pressable style={{ backgroundColor: "#6969D7", padding: 20, marginTop: 25, borderRadius: 15 }} onPress={() => router.push("/(no-session)/signin")}>
              <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontWeight: "500" }}>Get Started</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Welcome;

const styles = StyleSheet.create({})