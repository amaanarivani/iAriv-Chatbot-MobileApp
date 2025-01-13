import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';

const chatbots = () => {

    const pathname = usePathname();
    return (
        <>
            <Text>chatbots</Text>
            <TabNavigation pathname={pathname} />
        </>
    )
}

export default chatbots;

const styles = StyleSheet.create({})