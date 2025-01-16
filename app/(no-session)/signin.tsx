import { Image, Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { usePathname, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Context } from '@/contextApi/AuthContext';
import { contextType } from '@/contextApi/CreateDataContext';
import Popup from '@/components/Popup';
import { instance } from '@/api/baseUrlConfig';

const signin = () => {
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(true);

    const {
        boundActions: { signIn, updateUserActivity },
        state,
    } = useContext<contextType>(Context);

    const router = useRouter();
    const pathname = usePathname();

    const handleSigin = async () => {
        Keyboard.dismiss();
        let tEmail = email.trim().toLowerCase();
        let tPassword = password.trim();
        if (!tEmail || !tPassword) {
            if (!tEmail && tPassword) {
                setError("Please provide your email.");
                return;
            }

            if (!tPassword && tEmail) {
                setError("Please provide your password");
                return;
            }

            setError("Please provide your login credentials");
            return;
        }

        signIn({
            email: tEmail,
            password: tPassword,
            setLoading,
            setError,
            router,
            pathName: pathname,
            setMessage,
            updateUserActivity,
            setIsEmailVerified
        });
    };

    const handleVerifyEmail = async () => {
        try {
            const res = await instance.post(`/api/resend-verification-code`, {
                type: "email_verification",
                email: email
            })
            setMessage(res?.data?.message);
            setTimeout(() => {
                router.navigate({ pathname: "/(no-session)/verifyEmailCode", params: { item: email } })
            }, 2000);
        } catch (error: any) {
            if(error?.response?.data?.message){
                setError(error?.response?.data?.message)
            }else{
                setError("Something went wrong")
            }
        }
    }


    return (
        <>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%", marginHorizontal: "auto", marginTop: 20 }}>
                    <View>
                        <Pressable onPress={() => router.back()}>
                            <Ionicons name="arrow-back-sharp" size={26} color="white" />
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, marginVertical: "auto", color: "white" }}>Don't have an account yet?</Text>
                        <Pressable style={{ backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25, marginStart: 5 }} onPress={() => router.push("/(no-session)/signup")}>
                            <Text style={{ color: "black" }}>signup</Text>
                        </Pressable>
                    </View>
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
                        <Text style={{ fontSize: 25, fontWeight: "600", textAlign: "center", color: "black" }}>Sign in to your Account</Text>
                    </View>
                    <View style={{ width: "100%", marginTop: 25 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="name@example.com"
                            placeholderTextColor="#767676"
                            value={email}
                            onChangeText={(e) => {
                                setEmail(e)
                            }}
                        />
                    </View>
                    {
                        isEmailVerified ? <>
                        </> : <>
                            <Pressable style={{ marginTop: 5, marginStart: 5 }} onPress={handleVerifyEmail}>
                                <Text style={{ fontSize: 15, color: "blue" }}>Verify Email</Text>
                            </Pressable>
                        </>
                    }
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            placeholderTextColor="#767676"
                            value={password}
                            onChangeText={(e) => {
                                setPassword(e)
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Pressable style={{ backgroundColor: "#6969D7", padding: 20, borderRadius: 15 }} onPress={handleSigin}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>
                                {
                                    loading ? "Please wait..." : "Signin"
                                }
                            </Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={{ marginTop: 25, color: "gray", fontSize: 18, textAlign: "center", fontWeight: "600" }} onPress={() => router.push("/(no-session)/forgotPassword")}>Forgot your Password?</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ borderTopWidth: 0.5, borderColor: "gray", width: "30%", marginVertical: "auto", }}></View>
                        <View style={{ width: "30%" }}><Text style={{ color: "gray", fontWeight: "500", textAlign: "center" }}>or signin with</Text></View>
                        <View style={{ borderBottomWidth: 0.2, borderColor: "gray", marginVertical: "auto", width: "30%" }}></View>
                    </View>
                    <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Pressable style={{ borderWidth: 0.5, borderColor: "gray", paddingVertical: 15, paddingHorizontal: 25, flexDirection: "row", borderRadius: 10, alignItems: "center", }}>
                            <Image
                                source={require("@/assets/images/google-icon.png")}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text style={{ marginStart: 15, fontSize: 15 }}>Google</Text>
                        </Pressable>
                        <Pressable style={{ borderWidth: 0.5, borderColor: "gray", paddingVertical: 15, paddingHorizontal: 20, flexDirection: "row", borderRadius: 10, alignItems: "center" }}>
                            <Image
                                source={require("@/assets/images/facebook-icon.png")}
                                style={{ width: 30, height: 30, marginVertical: "auto" }}
                            />
                            <Text style={{ marginStart: 10, fontSize: 15 }}>Facebook</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
            <Popup
                message={message}
                error={error}
                onDismissSnackBar={() => {
                    setMessage("");
                    setError("");
                }}
            />
        </>
    )
}

export default signin;

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