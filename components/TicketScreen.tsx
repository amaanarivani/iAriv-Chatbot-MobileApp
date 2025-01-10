import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TicketScreen = () => {
  return (
    <View style={{ height: "100%", marginHorizontal: "auto" }}>
      <View style={{ marginHorizontal: "auto", marginTop: "25%" }}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/8702/8702628.png" }}
          style={{ width: 250, height: 250, }}
        />
      </View>
      <View style={{}}>
        <Text style={{ color: "black", textAlign: "center", fontSize: 25, fontWeight: "600" }}>No Tickets</Text>
        <Text style={{ color: "black", textAlign: "center", fontSize: 15, marginTop: 10 }}>There are currently no tickets from your selected property</Text>
      </View>
    </View>
  )
}

export default TicketScreen;

const styles = StyleSheet.create({})