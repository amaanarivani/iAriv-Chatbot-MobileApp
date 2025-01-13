import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TabNavigation from '@/components/TabNavigation';
import { usePathname, useRouter } from 'expo-router';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Chatbot from '@/components/Chatbot';
import Header from '@/components/Header';

const chatbots = () => {

    const chatbotData = [
        {
            _id: "1",
            title: "Steward",
            url: "www.iariv.com"
        },
        {
            _id: "2",
            title: "Gemini",
            url: "www.google.com"
        },
        {
            _id: "3",
            title: "Alexa",
            url: "www.amazon.com"
        }
    ];

    const renderItem = ({ item }: { item: any }) => (
        // <TouchableOpacity onPress={() => handlePress(item)}>
        <Chatbot data={item} />
        // </TouchableOpacity>
    );

    const router = useRouter();
    const pathname = usePathname();
    return (
        <>
            <View style={styles.container}>
                <Header title="Chatbots"/>
                <View>
                    <FlatList
                        data={chatbotData}
                        renderItem={renderItem}
                        keyExtractor={item => item._id.toString()}
                        // contentContainerStyle={{ marginBottom: 100}}
                        horizontal={false}
                        style={{ marginBottom: 258 }}
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
                </View>
                {/* <Chatbot data={chatbotData} /> */}
            </View>
            <TabNavigation pathname={pathname} />
        </>
    )
}

export default chatbots;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        // marginTop: 20
    },
})