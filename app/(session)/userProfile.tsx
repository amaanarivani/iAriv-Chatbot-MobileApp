import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '@/components/Header';
import { useRouter } from 'expo-router';
import { contextType } from '@/contextApi/CreateDataContext';
import { Context } from '@/contextApi/AuthContext';

const userProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const { boundActions: { signOut, updateUserActivity }, state } = useContext<contextType>(Context);

  useEffect(() => {
    setName(state?.userData?.name);
    setEmail(state?.userData?.email);
    setGender(state?.userData?.gender);
    setAddress(state?.userData?.address);
    setAbout(state?.userData?.about);
  }, [])


  const router = useRouter();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#6969D7" }}>
      <Header title="Personal Info" />
      <View style={{ width: "90%", backgroundColor: "#D1D1F0", padding: 6, marginHorizontal: "auto", marginTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}></View>
      <ScrollView style={{ backgroundColor: "white", height: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={{ marginTop: 20 }}>
          <View>
            <Image
              source={require("@/assets/images/sample_user.png")}
              style={{ width: 100, height: 100, marginHorizontal: "auto" }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="John Brown"
                placeholderTextColor="#767676"
                value={name}
                onChangeText={(e) => {
                  setName(e)
                }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="name@example.com"
                placeholderTextColor="#767676"
                value={email}
                editable={false}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            {/* <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="+123 456 789"
                placeholderTextColor="#767676"
              // value={name}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View> */}
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Gender</Text>
              <TextInput
                style={styles.input}
                placeholder="Male"
                placeholderTextColor="#767676"
                value={gender}
              // onChangeText={(e) => {
              //     setName(e)
              // }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Address</Text>
              <TextInput
                style={styles.input}
                placeholder="Fort Mill, USA"
                placeholderTextColor="#767676"
                value={address}
                onChangeText={(e) => {
                  setAddress(e)
                }}
              />
            </View>
            <View style={{ width: "100%", marginTop: 15 }}>
              <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>About</Text>
              <TextInput
                style={styles.input}
                placeholder="Something about yourself"
                placeholderTextColor="#767676"
                value={about}
                onChangeText={(e) => {
                  setAbout(e)
                }}
              />
            </View>
            <View style={{ marginTop: 15 }}>
              <Pressable style={{ backgroundColor: "#6969D7", padding: 20, borderRadius: 15 }}
              // onPress={() => router.push("/(session)/home")}
              >
                <Text style={{ color: "white", textAlign: "center", fontSize: 17 }}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default userProfile;

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