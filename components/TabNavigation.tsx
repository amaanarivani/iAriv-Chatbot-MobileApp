import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"

const TabNavigation = ({ pathname }: { pathname: string }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    return (
        <View style={{ borderTopColor: "#8f8f8f44", borderTopWidth: 0.5, position: "absolute", zIndex: 700, bottom: 0, height: 60, width: "100%", flexDirection: "row", justifyContent: "space-around", alignContent: "center", alignItems: "center", backgroundColor: '#ffff' }}>
            <Pressable onPress={() => { router.push("/(session)/home") }} style={{ width: "30%" }}>
                <View style={styles.tabItemV}>
                    {/* <Entypo name='home' color={pathname == "/home" ? "#6969D7" : "#8f8f8f"} size={30} /> */}
                    <FontAwesome5 name="inbox" color={pathname == "/home" ? "#6969D7" : "#8f8f8f"} size={30} />
                    <Text style={{ color: `${pathname == "/home" ? "#6969D7" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Dashboard</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { router.push("/(session)/createChatbot") }} style={{ width: "30%" }}>
                <View style={styles.tabItemV}>
                    <MaterialIcons name="add-circle-outline" color={pathname == "/createChatbot" ? "#6969D7" : "#8f8f8f"} size={36} />
                    <Text style={{ color: `${pathname == "/createChatbot" ? "#6969D7" : "#8f8f8f"}`, fontSize: 12, marginTop: 1 }} >Create</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { router.push("/(session)/chatbots") }} style={{ width: "30%" }}>
                <View style={styles.tabItemV}>
                    <FontAwesome5 name="robot" color={pathname == "/chatbots" ? "#6969D7" : "#8f8f8f"} size={28} />
                    <Text style={{ color: `${pathname == "/chatbots" ? "#6969D7" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Chatbots</Text>
                </View>
            </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    tabItemV: {
        display: "flex",
        alignItems: 'center'
    }
})
export default TabNavigation;