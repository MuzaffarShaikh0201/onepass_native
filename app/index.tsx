import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/UseTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "@/components/Onboarding";

const App = () => {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(true);
    const { theme } = useTheme();

    useEffect(() => {
        const func = async () => {
            const appData = await AsyncStorage.getItem("isAppFirstLaunched");
            if (appData == null) {
                setIsAppFirstLaunched(true);
                AsyncStorage.setItem("isAppFirstLaunched", "false");
            } else {
                setIsAppFirstLaunched(false);
            }
        };
        func();
    }, []);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontFamily: "Poppins Bold",
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            {isAppFirstLaunched ? (
                <Onboarding />
            ) : (
                <Text style={styles.text}>Home</Text>
            )}
        </SafeAreaView>
    );
};

export default App;
