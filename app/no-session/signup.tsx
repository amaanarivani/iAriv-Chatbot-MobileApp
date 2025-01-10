import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const signup = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
            <ScrollView style={styles.container}
                automaticallyAdjustKeyboardInsets
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={{ backgroundColor: "#F0F0F0", marginTop: 20, marginHorizontal: 20, padding: 20, borderRadius: 15 }}>
                    <View style={{ marginHorizontal: "auto", zIndex: 100 }}>
                        <Image
                            source={{ uri: "https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632383.png" }}
                            style={{ width: 300, height: 300, borderRadius: 150 }}
                        />
                    </View>

                    <Text style={{ fontSize: 25, fontWeight: "800", marginTop: 20 }}>Sign up to your account</Text>

                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 20, marginStart: 4, fontWeight: "500" }}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 20 }}>
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
                    <View style={{ width: "100%", marginTop: 20 }}>
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
                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 20, marginStart: 4, fontWeight: "500" }}>Confirm Password</Text>
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
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: "right", fontSize: 15 }}>Already have an account? <Text style={{ color: "blue" }} onPress={() => router.push("/no-session/signin")}>signin</Text></Text>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <Pressable style={{ backgroundColor: "#0286F2", padding: 20, borderRadius: 15 }}>
                            <Text style={{ color: "white", textAlign: "center" }}>Sign up</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default signup;

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
    container: {
        height: "100%",
        width: "100%",
        // paddingHorizontal: 20,
        // marginTop: 20,
        marginBottom: 20,
    },
})