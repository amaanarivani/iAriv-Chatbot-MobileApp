import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TabNavigation from '@/components/TabNavigation'
import { usePathname } from 'expo-router'
import ChatCard from '@/components/ChatCard'

const home = () => {
    const [chatOpen, setChatOpen] = useState(true);
    // const [chatData, setChatData] = useState([]);
    const pathName = usePathname();

    const chatData = [
        {
            _id: "1",
            session_id: "V8948946864",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "4 minutes",
            data_time: "Yesterday 1:15 pm",
            status: "connect"
        },
        {
            _id: "2",
            session_id: "V8948945637",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "10 minutes",
            data_time: "January 5",
            status: "connect"
        },
        {
            _id: "3",
            session_id: "V894894978",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "20 minutes",
            data_time: "December 20 2024",
            status: "Closed"
        },
        {
            _id: "4",
            session_id: "V8948945637",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "10 minutes",
            data_time: "December 10 2024",
            status: "connect"
        },
        {
            _id: "5",
            session_id: "V894894978",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "20 minutes",
            data_time: "November 30 2024",
            status: "Closed"
        },
        {
            _id: "6",
            session_id: "V8948945637",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "10 minutes",
            data_time: "November 5 2024",
            status: "connect"
        },
        {
            _id: "7",
            session_id: "V8948945637",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "10 minutes",
            data_time: "October 26 2024",
            status: "connect"
        },
        {
            _id: "8",
            session_id: "V8948945637",
            website: "www.iariv.com",
            messages: "9 messages",
            time: "10 minutes",
            data_time: "October 2 2024",
            status: "connect"
        },
    ];

    const renderItem = ({ item }: { item: any }) => <ChatCard data={item} />;

    return (
        <>
            <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                <View style={{ width: "50%", borderBottomColor: chatOpen ? "#0286F2" : "", borderBottomWidth: chatOpen ? 1.5 : 0, padding: 15, }}>
                    <Pressable style={{ width: "100%" }} onPress={() => setChatOpen(true)}>
                        <Text style={{ textAlign: "center", fontSize: 15, color: chatOpen ? "#0286F2" : "black", fontWeight: chatOpen ? "600" : "400" }}>Chats</Text>
                    </Pressable>
                </View>
                <View style={{ width: "50%", borderBottomColor: chatOpen ? "" : "#0286F2", borderBottomWidth: chatOpen ? 0 : 1, padding: 15, }}>
                    <Pressable style={{ width: "100%" }} onPress={() => setChatOpen(false)}>
                        <Text style={{ textAlign: "center", fontSize: 15, color: chatOpen ? "black" : "#0286F2", fontWeight: chatOpen ? "400" : "600" }}>Tickets</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{}}>
                {
                    chatOpen ? <>
                        <View style={{ marginHorizontal: "auto", width: "100%", borderBottomWidth: 0.5, borderBottomColor: "gray" }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Search"
                                placeholderTextColor="#767676"
                            />
                        </View>
                        <FlatList
                            data={chatData}
                            renderItem={renderItem}
                            keyExtractor={item => item._id.toString()}
                            contentContainerStyle={{}}
                            horizontal={false}
                            style={{ marginBottom: 185 }}
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps={"handled"}
                            // onRefresh={handleRefresh}
                            // refreshing={refreshing}
                            automaticallyAdjustKeyboardInsets
                        // ListEmptyComponent={
                        //     <Image
                        //         source={require('../../assets/images/loader-unscreen.gif')}
                        //         style={{ height: 500, width: "100%", marginHorizontal: "auto" }}
                        //     />
                        // }
                        />
                    </> : <>
                        <View style={{ height: "100%", marginHorizontal: "auto" }}>
                            <View style={{ marginHorizontal: "auto", marginTop: "25%" }}>
                                <Image
                                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/8702/8702628.png" }}
                                    style={{ width: 250, height: 250, }}
                                />
                            </View>
                            <View style={{}}>
                                <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontWeight: "600" }}>No Tickets</Text>
                                <Text style={{ color: "black", textAlign: "center", fontSize: 15, marginTop: 10 }}>There are currently no tickets from your selected property</Text>
                            </View>
                        </View>
                    </>
                }
            </View>
            <TabNavigation pathname={pathName} />
        </>
    )
}

export default home

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        // backgroundColor: "white"
        // paddingHorizontal: 20,
        // marginTop: 20,
        // marginBottom: 70,
    },
    input: {
        width: "95%",
        borderRadius: 10,
        padding: 14,
        borderColor: "#D9D9D9",
        borderWidth: 1,
        backgroundColor: "#D9D9D9",
        marginVertical: 15,
        marginHorizontal: "auto",
        // marginStart: 20
    },
})