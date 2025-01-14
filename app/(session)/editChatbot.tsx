import { Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import { useLocalSearchParams, usePathname, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import TabNavigation from '@/components/TabNavigation';

const editChatbot = () => {
    const [beginAutomated, setBeginAutomated] = useState(false);
    const [openDefault, setOpenDefault] = useState(false);
    const [title, setTitle] = useState("");
    const handleBeginAutomated = () => setBeginAutomated(previousState => !previousState);
    const handleOpenDefault = () => setOpenDefault(previousState => !previousState);

    const pathname = usePathname();
    const router = useRouter();

    const { item } = useLocalSearchParams<{ item: any }>();
    // const parsedItem = JSON.parse(item)
    console.log(item, "--> params item");
    const script = `<script crossorigin="anonymous"  async src="https://chatbotapi.iariv.com/api/chatbot/676298fa2539a90efd69a701"></script>`

    useEffect(() => {
        if (item) {
            setTitle(item);
        }
    }, [item])
    return (
        <>
            <Header title="Edit Chatbot" />
            <ScrollView style={{backgroundColor: "#E8E8E8"}} automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps={'handled'}>
                <View style={{ backgroundColor: "#6969D7", padding: 20, marginTop: 20, width: "90%", marginHorizontal: "auto", borderRadius: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "98%" }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 20 }}>Chatbot Script -</Text>
                        </View>
                        <View>
                            <MaterialIcons name="content-copy" size={24} color="white" />
                        </View>
                    </View>
                    <Text style={{ color: "white", fontSize: 20, marginTop: 30 }}>{script}</Text>
                </View>
                <View style={{ backgroundColor: "white", padding: 20, marginTop: 30, width: "90%", marginHorizontal: "auto", borderRadius: 15, marginBottom: 80 }}>
                    <View style={{ width: "100%", marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Domain</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="www.google.com"
                            placeholderTextColor="#767676"
                            value='www.google.com'
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Alex"
                            placeholderTextColor="#767676"
                            value={title}
                        // onChangeText={(e) => {
                        //     setName(e)
                        // }}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 20 }}>
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
                    <View style={{ width: "100%", marginTop: 20 }}>
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
                    <View style={{ width: "100%", marginTop: 20, flex: 1, alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 15, marginStart: 4, fontWeight: "500" }}>Should begin with automated question ?</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={beginAutomated ? 'white' : 'white'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={handleBeginAutomated}
                            value={beginAutomated}
                        />
                    </View>
                    <View style={{ width: "100%", marginTop: 20, flex: 1, alignItems: "flex-start" }}>
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
            </ScrollView >
            <TabNavigation pathname={pathname} />
        </>
    )
}

export default editChatbot;

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