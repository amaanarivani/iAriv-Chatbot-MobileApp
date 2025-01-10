import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ChatCard from './ChatCard';

const ChatScreen = () => {
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
        style={{ marginBottom: 60 }}
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
    </>
  )
}

export default ChatScreen;

const styles = StyleSheet.create({
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