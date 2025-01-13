import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';

const Chatbot = ({data}: {data: any}) => {
    return (
        <View style={{ backgroundColor: "#6969D7", padding: 20, marginTop: 30, width: "90%", marginHorizontal: "auto", borderRadius: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialIcons name="support-agent" size={34} color="white" />
                    <Text style={{ fontSize: 25, fontWeight: "500", color: "white", marginStart: 5 }}>{data?.title}</Text>
                </View>
                <View>
                    <Feather name="more-vertical" size={24} color="white" />
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
                <AntDesign name="earth" size={20} color="white" style={{ marginVertical: "auto" }} />
                <Text style={{ fontSize: 17, fontWeight: "500", color: "white", marginStart: 5 }}>{data?.url}</Text>
            </View>
        </View>
    )
}

export default Chatbot;

const styles = StyleSheet.create({})