import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header';
import { useRouter } from 'expo-router';

const changePassword = () => {

    const router = useRouter();
    return (
        <>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
                <Header title="Change Password" />
                <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
                <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
                    <View style={{ marginTop: 0 }}>
                        <Text style={{ fontSize: 25, fontWeight: "600", textAlign: "center", color: "black" }}>Change Your Password</Text>
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Old Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>New Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Confirm New Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#767676"
                        // value={name}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Pressable style={{ backgroundColor: "#6969D7", padding: 20, borderRadius: 15 }}
                        // onPress={() => router.push("/(session)/home")}
                        >
                            <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>Submit</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default changePassword;

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