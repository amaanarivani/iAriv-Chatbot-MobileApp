import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import { usePathname, useRouter } from 'expo-router';
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Context } from '@/contextApi/AuthContext';
import { contextType } from '@/contextApi/CreateDataContext';

const userAccount = () => {

    const { boundActions: { signOut, updateUserActivity }, state } = useContext<contextType>(Context);

    const pathname = usePathname();
    const router = useRouter();
    return (
        <>
            <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
                <Header title="Profile" />
                <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
                <ScrollView style={{ backgroundColor: "white", height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    {/* User */}
                    <Pressable style={{ backgroundColor: "#F5F5F5", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 10, flexDirection: "row", justifyContent: "space-between", borderWidth: 0.5, borderColor: "gray" }} onPress={() => router.navigate("/(session)/userProfile")}>
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={require("@/assets/images/sample_user.png")}
                                style={{ width: 60, height: 60 }}
                            />
                            {/* <FontAwesome6 name="user-large" size={50} color="black" /> */}
                            <View style={{ marginStart: 15 }}>
                                <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 5 }}>{state?.userData?.name}</Text>
                                <Text>{state?.userData?.email}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                            <AntDesign name="right" size={24} color="black" />
                        </View>
                    </Pressable>
                    {/* General */}
                    <View style={{ backgroundColor: "#F5F5F5", padding: 20, marginTop: 15, width: "90%", marginHorizontal: "auto", borderRadius: 10, borderWidth: 0.5, borderColor: "gray" }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 25, fontWeight: "600" }}>General</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <Entypo name="lock" size={24} color="black" />
                            </View>
                            <Pressable style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }} onPress={() => router.navigate("/(session)/changePassword")}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Change Password</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Subscription</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* About */}
                    <View style={{ backgroundColor: "#F5F5F5", padding: 20, marginTop: 15, width: "90%", marginHorizontal: "auto", borderRadius: 10, borderWidth: 0.5, borderColor: "gray" }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 25, fontWeight: "600" }}>About</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <FontAwesome6 name="headphones" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Help & Support</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <Ionicons name="document-text" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Terms & Conditions</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <MaterialIcons name="privacy-tip" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Privacy Policy</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <AntDesign name="infocirlce" size={24} color="black" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>About iAriv Chatbot</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* logout and delete account */}
                    <View style={{ backgroundColor: "#F5F5F5", padding: 20, marginTop: 15, width: "90%", marginHorizontal: "auto", borderRadius: 10, borderWidth: 0.5, borderColor: "gray" }}>
                        <Pressable style={{ flexDirection: "row" }}>
                            <View style={{}}>
                                <MaterialIcons name="logout" size={24} color="black" />
                            </View>
                            <Pressable style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }} onPress={() => { signOut({ router }) }}>
                                <Pressable style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500" }}>Logout</Text>
                                </Pressable>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>
                            </Pressable>
                        </Pressable>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <View style={{}}>
                                <AntDesign name="delete" size={24} color="red" />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                    <Text style={{ fontSize: 15, fontWeight: "500", color: "red" }}>Delete Account</Text>
                                </View>
                                <View style={{ marginEnd: 10 }}>
                                    <AntDesign name="right" size={20} color="red" />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
            {/* <TabNavigation pathname={pathname} /> */}
        </>
    )
}

export default userAccount;

const styles = StyleSheet.create({})