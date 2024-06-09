import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>home</Text>
        </SafeAreaView>
    );
};

export default home;

const styles = StyleSheet.create({});
