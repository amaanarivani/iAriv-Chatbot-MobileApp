import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useFocusEffect, useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '@/contextApi/AuthContext';
import { contextType } from '@/contextApi/CreateDataContext';

const index = () => {
  const [loadingsignIn, setLoadingsignIn] = useState(true);
  const router = useRouter();

  const {
    boundActions: {
      signOut,
      setSignInStatus,
      setLoadingStatus,
      updateUserActivity,
    },
    state,
  } = useContext<contextType>(Context);

  const checkSignIn = async () => {
    setLoadingsignIn(true);
    try {
      let getUserId = await AsyncStorage.getItem("user_id");
      if (getUserId) {
        setSignInStatus({
          setLoading: true,
          router
        });
      } else {
        // router.push("/(no-session)/verifyEmailCode")
        router.push("/(no-session)/signin")
        // setLoadingStatus({ status: false });
      }
    } catch (error) {
      setLoadingsignIn(false);
    }
  };

  useFocusEffect(() => {
    checkSignIn();
  });

  return (
    <ImageBackground
      source={require('@/assets/images/splash-icon.png')}
      style={{ flex: 1, justifyContent: "center" }}
    ></ImageBackground>
  )
}

export default index

const styles = StyleSheet.create({})