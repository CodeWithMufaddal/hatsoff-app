import { useFonts } from "expo-font";
import { Appearance, useColorScheme } from 'react-native';
import { Slot, Stack, Tabs } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar';
import { SIZES } from "../constants";
SplashScreen.preventAutoHideAsync()
import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
} from "@react-navigation/native";

const Layout = () => {
    const theme = useColorScheme();

    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) await SplashScreen.hideAsync();
    }, [fontsLoaded]);
    if (!fontsLoaded) return null;

    return (
        <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack
                onLayout={onLayoutRootView}
                screenOptions={{
                    headerTransparent: true,
                    statusBarTranslucent: true,
                    navigationBarHidden: true,
                }}
            >

            {/* <Tabs> */}
                <Tabs.Screen name="(tabs)"/>
            {/* </Tabs> */}
            </Stack>
        </ThemeProvider>
    )
}

export default Layout;