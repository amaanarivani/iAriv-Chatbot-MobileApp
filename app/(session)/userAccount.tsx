import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';
import { AntDesign, Entypo, Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const userAccount = () => {

    const pathname = usePathname();
    return (
        <>
            <Header title="Profile" />
            <ScrollView style={{ backgroundColor: "#D9D9D9", height: "100%", }}>
                {/* User */}
                <View style={{ backgroundColor: "white", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 10, flexDirection: "row" }}>
                    <View>
                        <Image
                            source={require("@/assets/images/sample_user.png")}
                            style={{ width: 70, height: 70 }}
                        />
                        {/* <FontAwesome6 name="user-large" size={50} color="black" /> */}
                    </View>
                    <View style={{ marginStart: 20, marginVertical: "auto" }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 5 }}>Amaan Alam</Text>
                        <Text>amaan@arivani.net</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", marginStart: 80 }}>
                        <AntDesign name="right" size={24} color="black" />
                    </View>
                </View>
                {/* General */}
                <View style={{ backgroundColor: "white", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 10, }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 25, fontWeight: "600" }}>General</Text>
                    </View>
                    {/* <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <FontAwesome6 name="user-large" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Personal Information</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View> */}
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <Entypo name="lock" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Change Password</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Subscription</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                {/* About */}
                <View style={{ backgroundColor: "white", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 10, }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 25, fontWeight: "600" }}>About</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <FontAwesome6 name="headphones" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Help & Support</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <Ionicons name="document-text" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Terms & Conditions</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <MaterialIcons name="privacy-tip" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Privacy Policy</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <AntDesign name="infocirlce" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>About iAriv Chatbot</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                {/* logout and delete account */}
                <View style={{ backgroundColor: "white", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 10, }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{}}>
                            <MaterialIcons name="logout" size={24} color="black" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>Logout</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <View style={{}}>
                            <AntDesign name="delete" size={24} color="red" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                            <View style={{ marginStart: 20, marginVertical: "auto" }}>
                                <Text style={{ fontSize: 15, fontWeight: "500", color: "red" }}>Delete Account</Text>
                            </View>
                            <View style={{ marginEnd: 10 }}>
                                <AntDesign name="right" size={24} color="red" />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <TabNavigation pathname={pathname} /> */}
        </>
    )
}

export default userAccount;

const styles = StyleSheet.create({})