import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router/drawer";
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Button, Divider, Menu } from 'react-native-paper';
// import UseAppContext, { AppProvider } from '@/contextApi/UseContext';

const CustomDrawerContent = (props: any) => {
    const router = useRouter();
    // const { currentUser, logout } = UseAppContext();
    // console.log(currentUser, "drawer layout");


    // Get the active route name
    const activeRoute = props.state.routeNames[props.state.index];

    return (
        <DrawerContentScrollView
            {...props}
            style={{ backgroundColor: "#0286F2", }}
        >
            {/* <Pressable
            onPress={() => { router.push('/Drawer/profile') }}
            >
                <View style={styles.userInfoSection}>
                    {
                        currentUser?.avatar ? <>
                            <Image
                                source={{ uri: currentUser.avatar }}
                                style={styles.avatar}
                            />
                        </> : <>
                            <Image
                                source={require("@/assets/images/avatar.png")} // Ensure the correct path to your local image
                                style={styles.avatar}
                            />
                        </>
                    }
                    <Text style={styles.userName}>{currentUser?.name}</Text>
                </View>
            </Pressable> */}
            <DrawerItem
                label="Home"
                onPress={() => router.push('/Drawer/home')}
                focused={activeRoute === 'home'}
                style={activeRoute === 'home' ? styles.activeItem : null}
                labelStyle={activeRoute === 'home' ? styles.activeLabel : styles.inactiveLabel}
            />
            <DrawerItem
                label="Inbox"
                onPress={() => router.push('/Drawer/inbox')}
                focused={activeRoute === 'inbox'}
                style={activeRoute === 'inbox' ? styles.activeItem : null}
                labelStyle={activeRoute === 'inbox' ? styles.activeLabel : styles.inactiveLabel}
            />
            <DrawerItem
                label="Logout"
                onPress={() => router.push("/Screens/signin")}
                style={styles.drawerItem}
                labelStyle={styles.inactiveLabel}
            />
        </DrawerContentScrollView>
    );
};

const _layout = () => {
    return (
        // <AppProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                initialRouteName='home'
                screenOptions={{
                    drawerPosition: 'left',
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            />
        </GestureHandlerRootView>
        // </AppProvider>
    );
};

export default _layout;

const styles = StyleSheet.create({
    userInfoSection: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userName: {
        marginLeft: 15,
        fontSize: 18,
        color: '#fff',
    },
    activeItem: {
        backgroundColor: '#ffffff',
    },
    activeLabel: {
        color: '#4169E1',
    },
    inactiveLabel: {
        color: '#FFFFFF',
    },
    drawerItem: {
        marginTop: 10,
    },
});
