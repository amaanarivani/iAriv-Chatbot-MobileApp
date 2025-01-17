import { Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import TabNavigation from '@/components/TabNavigation';
import { usePathname, useRouter } from 'expo-router';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import Header from '@/components/Header';

const createChatbot = () => {
  const [beginAutomated, setBeginAutomated] = useState(false);
  const [openDefault, setOpenDefault] = useState(false);
  const handleBeginAutomated = () => setBeginAutomated(previousState => !previousState);
  const handleOpenDefault = () => setOpenDefault(previousState => !previousState);

  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
        <Header title="Create Chatbot" />
        <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
        <ScrollView style={{ flex: 1, backgroundColor: "white", height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20, marginBottom: 50 }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
          <View style={{ width: "100%", padding: 15, height: "100%", }}>
            <View style={{ width: "100%", marginTop: 10 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Domain</Text>
              <TextInput
                style={styles.input}
                placeholder="www.google.com"
                placeholderTextColor="#767676"
              // value={name}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Alex"
                placeholderTextColor="#767676"
              // value={name}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Welcome Message</Text>
              <TextInput
                style={styles.input}
                placeholder="Hello, I am Alex. How may I help you"
                placeholderTextColor="#767676"
              // value={name}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>No Answer Message</Text>
              <TextInput
                style={styles.input}
                placeholder="Sorry, I didn't understand"
                placeholderTextColor="#767676"
              // value={name}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15, flex: 1, alignItems: "flex-start" }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Should begin with automated question ?</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={beginAutomated ? 'white' : 'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleBeginAutomated}
                value={beginAutomated}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15, flex: 1, alignItems: "flex-start" }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Should chatbot open by default ?</Text>
              <Switch
                style={{}}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={openDefault ? 'white' : 'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleOpenDefault}
                value={openDefault}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Pressable style={{ backgroundColor: "#6969D7", padding: 15, borderRadius: 15 }}>
                <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <TabNavigation pathname={pathname} />
    </>
  )
}

export default createChatbot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // marginTop: 20
  },
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