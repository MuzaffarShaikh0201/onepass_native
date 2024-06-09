import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height } from "@/constants/constants";
import { getFontSize } from "@/constants/utilities";
import useTheme from "@/hooks/UseTheme";
import NamedIcon from "./NamedIcon";

const Splash = () => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            margin: height * 0.05,
        },
        subtitleContainer: {
            position: "absolute",
            bottom: 0,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        subtitle: {
            color: theme.textSecondary,
            fontSize: getFontSize("normal"),
        },
    });

    return (
        <View style={styles.container}>
            <NamedIcon />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>
                    The only password manager you’ll ever need.
                </Text>
            </View>
        </View>
    );
};

export default Splash;
