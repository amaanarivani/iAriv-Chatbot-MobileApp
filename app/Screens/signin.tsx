import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const signin = () => {
    return (
        <SafeAreaView style={{ height: "100%" }}>
            <View style={{ height: "50%", backgroundColor: "#0286F2" }}>
                <Image
                    source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/040/750/248/small_2x/ai-generated-cheerful-cute-white-standing-humanoid-robot-isolated-on-a-transparent-background-ai-generative-free-png.png" }}
                    style={{ width: "100%", height: 250, marginTop: 10 }}
                />
            </View>
            <View style={{ height: "50%", backgroundColor: "#F0F0F0" }}>

            </View>
            <View style={{ width: "100%", paddingHorizontal: 15, position: "absolute", top: "35%" }}>
                <View style={{ width: "100%", backgroundColor: "white", borderRadius: 15, padding: 120 }}>
                    <Text>Signin</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default signin;

const styles = StyleSheet.create({})