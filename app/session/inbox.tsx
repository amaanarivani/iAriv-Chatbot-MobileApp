import React, { useState, useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import ChatScreen from '@/components/ChatScreen';
import TicketScreen from '@/components/TicketScreen';
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';

const Inbox = () => {
    const [chatOpen, setChatOpen] = useState(true);
    const swiperRef = useRef<Swiper>(null);
    const pathname = usePathname();

    const handleTabPress = (index: number) => {
        if ((index === 0 && !chatOpen) || (index === 1 && chatOpen)) {
            setChatOpen(index === 0);
            swiperRef.current?.scrollBy(index - (chatOpen ? 0 : 1), true);
        }
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                    <View style={[styles.tab, chatOpen && styles.activeTab]}>
                        <Pressable onPress={() => handleTabPress(0)}>
                            <Text style={[styles.tabText, chatOpen && styles.activeTabText]}>Chats</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.tab, !chatOpen && styles.activeTab]}>
                        <Pressable onPress={() => handleTabPress(1)}>
                            <Text style={[styles.tabText, !chatOpen && styles.activeTabText]}>Tickets</Text>
                        </Pressable>
                    </View>
                </View>
                <Swiper
                    ref={swiperRef}
                    loop={false}
                    index={chatOpen ? 0 : 1}
                    onIndexChanged={(index) => setChatOpen(index === 0)}
                    style={{height: "100%"}}
                >
                    <View style={styles.slide}>
                        <ChatScreen />
                    </View>
                    <View style={styles.slide}>
                        <TicketScreen />
                    </View>
                </Swiper>
            </View>
            <TabNavigation pathname={pathname} />
        </>
    );
};

export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
    },
    slide: {
        height: "100%"
    },
    tab: {
        width: '50%',
        padding: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#0286F2',
    },
    tabText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
        fontWeight: '400',
    },
    activeTabText: {
        color: '#0286F2',
        fontWeight: '600',
    },
});
