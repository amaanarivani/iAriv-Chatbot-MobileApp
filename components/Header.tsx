import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Header = ({title}:{title: any}) => {

  const router = useRouter();
  return (
    <View style={{ backgroundColor: "#6969D7", padding: 20, flexDirection: "row", justifyContent: "space-between" }}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
      </Pressable>
      <View>
        <View style={{ flexDirection: "row", marginStart: 10 }}>
          <Text style={{ color: "white", fontSize: 20, marginStart: 5, marginVertical: "auto" }}>{title}</Text>
        </View>
      </View>
      <View>
        <Feather name="more-vertical" size={24} color="white" />
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({})