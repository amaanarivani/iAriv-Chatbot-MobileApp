import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const ChatCard = ({ data }: { data: any }) => {
    return (
        <View style={{ backgroundColor: "white", padding: 10, width: "99%", borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <AntDesign name="user" size={24} color="black" />
                    </View>
                    <View style={{ marginStart: 2 }}>
                        <Text style={{ fontSize: 15 }}>{data?.session_id}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 12 }}>{data?.messages}</Text>
                            <Text style={{ fontSize: 12, marginStart: 5 }}>{data?.time}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable style={{ backgroundColor: data?.status == "connect" ? "#6969D7" : "gray", paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                        <Text style={{ fontSize: 15, color: "white" }}>{data?.status}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="earth" size={18} color="black" />
                    <Text style={{ fontSize: 13, fontWeight: "600", marginStart: 5 }}>{data?.website}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 12 }}>{data?.data_time}</Text>
                </View>
            </View>
        </View>
    )
}

export default ChatCard;

const styles = StyleSheet.create({})