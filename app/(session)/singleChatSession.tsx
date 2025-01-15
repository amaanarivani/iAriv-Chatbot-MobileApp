import { Keyboard, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import Header from '@/components/Header';

const singleChatSession = () => {
  const [sessionId, setSessionId] = useState("");
  const router = useRouter();
  const { item } = useLocalSearchParams<{ item: any }>();
  // const parsedItem = JSON.parse(item)
  console.log(item, "params item");

  useEffect(() => {
    if (item) {
      setSessionId(item);
    }
  }, [item])


  return (
    // <View style={styles.container}>
    <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
      <Header title={sessionId} />
      <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
      <ScrollView style={{ backgroundColor: "#E8E8E8", flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
        <View style={{}}>
          <View>
            <Text style={{ textAlign: "center", marginTop: 10, fontSize: 15, fontWeight: "500" }}>08-Jan-2025</Text>
          </View>
          <View>
            <Text style={{ marginTop: 20, fontSize: 18, marginStart: 10 }}>Visitor navigated to <Text style={{ color: "blue" }}>www.iariv.com</Text></Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
              <View style={{}}>
                <View style={{ backgroundColor: "white", padding: 15, marginVertical: "auto", marginStart: 10, borderRadius: 15 }}>
                  <Text style={{ fontSize: 17 }}>Hello</Text>
                </View>
              </View>
            </View>
            <View style={{ marginStart: 50, marginTop: 10 }}>
              <Text style={{ fontSize: 13, color: "gray" }}>{sessionId} - 1:11 pm</Text>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 15, textAlign: "center" }}>Amaan Alam (Me) <Text style={{ color: "gray" }}>has joined the conversation</Text></Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={{}}>
                <View style={{ backgroundColor: "#6969D7", padding: 15, marginVertical: "auto", borderRadius: 15 }}>
                  <Text style={{ fontSize: 17, color: "white" }}>Hey</Text>
                </View>
              </View>
              <View style={{ marginStart: 10 }}>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
            </View>
            <View style={{ marginTop: 10, marginEnd: 10 }}>
              <Text style={{ fontSize: 13, color: "gray" }}>Amaan Alam (Me) - 1:13 pm</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginTop: 20 }}>
            <View style={{ flexDirection: "row", }}>
              <View style={{}}>
                <View style={{ backgroundColor: "#6969D7", padding: 15, marginVertical: "auto", borderRadius: 15 }}>
                  <Text style={{ fontSize: 17, color: "white" }}>What do you want</Text>
                </View>
              </View>
              <View style={{ marginStart: 10 }}>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
            </View>
            <View style={{ marginTop: 10, marginEnd: 10 }}>
              <Text style={{ fontSize: 13, color: "gray" }}>Amaan Alam (Me) - 1:13 pm</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
              <View style={{}}>
                <View style={{ backgroundColor: "white", padding: 15, marginVertical: "auto", marginStart: 10, borderRadius: 15 }}>
                  <Text style={{ fontSize: 17 }}>Just checking</Text>
                </View>
              </View>
            </View>
            <View style={{ marginStart: 50, marginTop: 10 }}>
              <Text style={{ fontSize: 13, color: "gray" }}>{sessionId} - 1:13 pm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", width: "100%", backgroundColor: "#E8E8E8", paddingBottom: 10 }}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <TextInput style={styles.input} placeholder='Type your message' />
        <Pressable style={{ width: "20%", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#6969D7", borderRadius: 30, marginHorizontal: "3%" }}>
          <Feather name="send" size={22} color="white" />
          {/* <Text style={{color: "white"}}>Send</Text> */}
        </Pressable>
        {/* </TouchableWithoutFeedback> */}
      </View>
    </SafeAreaView>
    // </View>
  )
}

export default singleChatSession

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // marginTop: 20
  },
  input: {
    width: "70%",
    borderRadius: 30,
    padding: 20,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    backgroundColor: "white",
    // marginBottom: 10,
    marginStart: "5%"
    // marginStart: 20
  },
});