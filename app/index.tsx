import { StyleSheet, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@/hooks/UseTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "@/screens/Onboarding";
import { AppDataContext } from "@/contexts/AppContext";

const App = () => {
    const { theme } = useTheme();
    const { isFirstLoaded } = useContext(AppDataContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
        },
        text: {
            fontFamily: "Poppins Bold",
        },
    });

    console.log(isFirstLoaded);

    return (
        <SafeAreaView style={styles.container}>
            {/* {isFirstLoaded ? (
                <Onboarding />
            ) : (
                <Text style={styles.text}>Home</Text>
            )} */}
            <Onboarding />
        </SafeAreaView>
    );
};

export default App;
