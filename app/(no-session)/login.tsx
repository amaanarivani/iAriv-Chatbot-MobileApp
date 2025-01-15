import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const login = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
            <ScrollView automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
                <View style={{ backgroundColor: "#F0F0F0", marginVertical: 20, marginHorizontal: 20, padding: 20, borderRadius: 15 }}>
                    <View style={{ marginHorizontal: "auto", zIndex: 999 }}>
                        <Image
                            source={{ uri: "https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632383.png" }}
                            style={{ width: 300, height: 300, borderRadius: 150 }}
                        />
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: "800", marginTop: 15 }}>Sign in to your account</Text>

                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 20, marginStart: 4, fontWeight: "500" }}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 20, marginStart: 4, fontWeight: "500" }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <Text style={{ marginTop: 10, color: "blue", fontSize: 15, textAlign: "right" }} onPress={() => router.push("/(no-session)/forgotPassword")}>Forgot Password?</Text>
                    <View style={{ marginTop: 20 }}>
                        <Pressable style={{ backgroundColor: "#6969D7", padding: 20, borderRadius: 15 }} onPress={() => router.push("/(session)/home")}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>Sign in</Text>
                        </Pressable>
                    </View>
                    <View style={{ marginTop: 20, flexDirection: "row", marginHorizontal: "auto" }}>
                        <Text style={{ fontSize: 16, marginVertical: "auto" }}>Don't have an account yet?</Text>
                        <Pressable style={{ backgroundColor: "#6969D7", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25, marginStart: 5 }} onPress={() => router.push("/(no-session)/signup")}>
                            <Text style={{ color: "white" }}>signup</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default login;

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderRadius: 10,
        padding: 20,
        borderColor: "#D9D9D9",
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 5,
        // marginStart: 20
    },
})