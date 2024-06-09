import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const TabsLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" />
            <Stack.Screen name="create" />
            <Stack.Screen name="profile" />
        </Stack>
    );
};

export default TabsLayout;

const styles = StyleSheet.create({});
