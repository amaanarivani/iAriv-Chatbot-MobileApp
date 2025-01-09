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
            <Pressable onPress={() => { router.push("/Drawer/home") }} style={{ width: "30%" }}>
                <View style={styles.tabItemV}>
                    <Entypo name='home' color={pathname == "/Drawer/home" ? "#0286F2" : "#8f8f8f"} size={24} />
                    <Text style={{ color: `${pathname == "/Drawer/home" ? "#0286F2" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Home</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { router.push("/Drawer/inbox") }} style={{ width: "30%" }}>
                <View style={styles.tabItemV}>
                    <MaterialIcons name="add-circle-outline" color={pathname == "/Drawer/inbox" ? "#0286F2" : "#8f8f8f"} size={34} />
                    <Text style={{ color: `${pathname == "/Drawer/inbox" ? "#0286F2" : "#8f8f8f"}`, fontSize: 12, marginTop: 4 }} >Inbox</Text>
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