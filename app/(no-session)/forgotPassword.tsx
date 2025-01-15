import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const forgotPassword = () => {

    const router = useRouter();
    return (


        <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%", marginHorizontal: "auto", marginTop: 20 }}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="arrow-back-sharp" size={26} color="white" />
                </Pressable>
            </View>
            <View style={{ marginTop: "10%" }}>
                <Text style={{ fontSize: 40, fontWeight: "800", color: "white", textAlign: "center" }}>iAriv Chatbot</Text>
            </View>
            <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 30, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
            <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
                {/* <View>
                    <Text style={{ fontSize: 30, fontWeight: "600", textAlign: "center" }}>Welcome Back!</Text>
                </View> */}
                <View style={{ marginTop: 0 }}>
                    <Text style={{ fontSize: 25, fontWeight: "600", textAlign: "center", color: "black" }}>Reset Your Password</Text>
                </View>
                <View style={{ width: "100%", marginTop: 25 }}>
                    <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="name@example.com"
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
                <View style={{ marginTop: 20 }}>
                    <Pressable style={{ backgroundColor: "#D1D1F0", padding: 20, borderRadius: 15 }} onPress={() => router.push("/(no-session)/signin")}>
                        <Text style={{ color: "#6969D7", textAlign: "center", fontSize: 17, fontWeight: "600" }}>Back to Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>


        // <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
        //     <ScrollView automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
        //         <View style={{ backgroundColor: "#F0F0F0", marginTop: "15%", marginHorizontal: 20, padding: 20, borderRadius: 15 }}>
        //             <View style={{ marginHorizontal: "auto", zIndex: 999 }}>
        //                 <Image
        //                     source={{ uri: "https://png.pngtree.com/png-vector/20220707/ourmid/pngtree-chatbot-robot-concept-chat-bot-png-image_5632383.png" }}
        //                     style={{ width: 300, height: 300, borderRadius: 150 }}
        //                 />
        //             </View>
        //             <Text style={{ fontSize: 25, fontWeight: "800", marginTop: 15 }}>Reset Your Password</Text>

        //             <View style={{ width: "100%", marginTop: 15 }}>
        //                 <Text style={{ fontSize: 20, marginStart: 4, fontWeight: "500" }}>Email</Text>
        //                 <TextInput
        //                     style={styles.input}
        //                     placeholder="Enter your email"
        //                     placeholderTextColor="#767676"
        //                 // value={name}
        //                 // onChangeText={(e) => {
        //                 //     setName(e)
        //                 // }}
        //                 />
        //             </View>
        //             <View style={{ marginTop: 20 }}>
        //                 <Pressable style={{ backgroundColor: "#6969D7", padding: 20, borderRadius: 15 }}
        //                 // onPress={() => router.push("/(session)/home")}
        //                 >
        //                     <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>Submit</Text>
        //                 </Pressable>
        //             </View>
        //             <View style={{ marginTop: 20 }}>
        //                 <Pressable style={{ backgroundColor: "white", padding: 20, borderRadius: 15 }}
        //                     onPress={() => router.push("/(no-session)/signin")}
        //                 >
        //                     <Text style={{ color: "black", textAlign: "center", fontSize: 17 }}>Back to login</Text>
        //                 </Pressable>
        //             </View>
        //         </View>
        //     </ScrollView>
        // </SafeAreaView>
    )
}

export default forgotPassword;

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