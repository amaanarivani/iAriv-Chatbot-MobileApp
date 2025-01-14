import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import UserAccount from './UserAccount';

const Header = ({ title }: { title: any }) => {

  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#6969D7", padding: 20, flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={26} color="white" />
      </Pressable>
      <View>
        <View style={{ flexDirection: "row", marginStart: 10 }}>
          <Text style={{ color: "white", fontSize: 24, marginStart: 5, marginVertical: "auto", fontWeight: "600" }}>{title}</Text>
        </View>
      </View>
      <Pressable style={{ backgroundColor: "white", padding: 5, borderRadius: "100%", marginVertical: "auto" }} onPress={() => router.navigate("/(session)/userAccount")}>
        <UserAccount />
      </Pressable>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})