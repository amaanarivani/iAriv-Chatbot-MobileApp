import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

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
    <View style={styles.container}>
      <View style={{ backgroundColor: "#6969D7", padding: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </Pressable>
        <View>
          <View style={{ flexDirection: "row", marginStart: 10 }}>
            <AntDesign name="user" size={24} color="white" style={{ marginVertical: "auto" }} />
            <Text style={{ color: "white", fontSize: 20, marginStart: 5, marginVertical: "auto" }}>{sessionId}</Text>
          </View>
          <Text style={{ color: "white", fontSize: 15, marginStart: 5, textAlign: "center" }}>www.iariv.com</Text>
        </View>
        <View>
          <Feather name="more-vertical" size={24} color="white" />
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#E8E8E8", flex: 1 }} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
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
                  <Text style={{ fontSize: 20 }}>Hello</Text>
                </View>
              </View>
            </View>
            <View style={{ marginStart: 50, marginTop: 10 }}>
              <Text style={{ fontSize: 20, color: "gray" }}>{sessionId} - 1:11 pm</Text>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Amaan Alam (Me) <Text style={{ color: "gray" }}>has joined the conversation</Text></Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View style={{}}>
                <View style={{ backgroundColor: "#6969D7", padding: 15, marginVertical: "auto", borderRadius: 15 }}>
                  <Text style={{ fontSize: 20, color: "white" }}>Hey</Text>
                </View>
              </View>
              <View style={{ marginStart: 10 }}>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
            </View>
            <View style={{ marginTop: 10, marginEnd: 10 }}>
              <Text style={{ fontSize: 20, color: "gray" }}>Amaan Alam (Me) - 1:13 pm</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row", }}>
              <View style={{}}>
                <View style={{ backgroundColor: "#6969D7", padding: 15, marginVertical: "auto", borderRadius: 15 }}>
                  <Text style={{ fontSize: 20, color: "white" }}>What do you want</Text>
                </View>
              </View>
              <View style={{ marginStart: 10 }}>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
            </View>
            <View style={{ marginTop: 10, marginEnd: 10 }}>
              <Text style={{ fontSize: 20, color: "gray" }}>Amaan Alam (Me) - 1:13 pm</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <View>
                <AntDesign name="user" size={34} color="black" style={{ marginTop: 5 }} />
              </View>
              <View style={{}}>
                <View style={{ backgroundColor: "white", padding: 15, marginVertical: "auto", marginStart: 10, borderRadius: 15 }}>
                  <Text style={{ fontSize: 20 }}>Just checking</Text>
                </View>
              </View>
            </View>
            <View style={{ marginStart: 50, marginTop: 10 }}>
              <Text style={{ fontSize: 20, color: "gray" }}>{sessionId} - 1:13 pm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", width: "100%" }}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <TextInput style={styles.input} placeholder='Type your message' />
        <Pressable style={{ width: "20%", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#6969D7", borderRadius: 5 }}>
          <Feather name="send" size={24} color="white" />
          {/* <Text style={{color: "white"}}>Send</Text> */}
        </Pressable>
        {/* </TouchableWithoutFeedback> */}
      </View>
    </View>
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
    width: "80%",
    borderRadius: 10,
    padding: 15,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    backgroundColor: "white",
    marginBottom: 1,
    // marginStart: 20
  },
});