import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Provider } from '@/contextApi/AuthContext';
import { PaperProvider } from 'react-native-paper';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Provider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)" options={{ headerShown: false }} />
          <Stack.Screen name="(session)" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/home" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/singleChatSession" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/createChatbot" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/chatbots" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/editChatbot" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/userAccount" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/userProfile" options={{ headerShown: false }} />
          <Stack.Screen name="(session)/changePassword" options={{ headerShown: false }} />
          {/* <Stack.Screen name="Drawer" options={{ headerShown: false }} />
        <Stack.Screen name="Drawer/inbox" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(no-session)/resetPassword" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)/verifyEmailCode" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)/welcome" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)/signin" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)/signup" options={{ headerShown: false }} />
          <Stack.Screen name="(no-session)/forgotPassword" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </PaperProvider>
  );
}
