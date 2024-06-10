import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/constants";
import * as NavigationBar from "expo-navigation-bar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import Splash from "@/screens/Splash";
import Onboarding from "@/screens/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppDataContext, AppDataProvider } from "@/contexts/AppContext";

const RootLayout = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(true);

    let [fontsLoaded] = useFonts({
        "Bebas Neue": require("../assets/fonts/BebasNeue-Regular.ttf"),
        "Poppins Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    });
    const [theme, setTheme] = useState(Colors.light);

    const toggleTheme = () => {
        setTheme(theme === Colors.light ? Colors.dark : Colors.light);
    };

    const setAppData = async () => {
        const appData = await AsyncStorage.getItem("isAppFirstLaunched");
        if (appData == null) {
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem("isAppFirstLaunched", "false");
        } else {
            setIsAppFirstLaunched(false);
        }
    };

    useEffect(() => {
        StatusBar.setBarStyle(theme.isDark ? "light-content" : "dark-content");
        StatusBar.setBackgroundColor(theme.backgroundPrimary);
        NavigationBar.setButtonStyleAsync(theme.isDark ? "light" : "dark");
        NavigationBar.setBackgroundColorAsync(theme.backgroundPrimary);
    }, [theme.isDark]);

    useEffect(() => {
        setTimeout(() => setShowSplashScreen(false), 2000);
        setAppData();
        setDataLoaded(true);
    }, []);

    if (!fontsLoaded || showSplashScreen || !dataLoaded) {
        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: theme.backgroundPrimary }}
            >
                <Splash />
            </SafeAreaView>
        );
    }

    return (
        <ThemeProvider value={{ theme: theme, toggleTheme }}>
            <AppDataProvider
                value={{
                    isFirstLoaded: isAppFirstLaunched,
                    setIsFirstLoaded: setAppData,
                }}
            >
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="index" />
                </Stack>
            </AppDataProvider>
        </ThemeProvider>
    );
};

export default RootLayout;
