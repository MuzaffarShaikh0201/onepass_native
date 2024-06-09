import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const Colors = {
    light: {
        isDark: false,
        primary: "#FF6464",
        textPrimary: "#545974",
        textSecondary: "#BABABA",
        backgroundPrimary: "#FFFFFF",
        backgroundSecondary: "#FFFFFF33",
        tint: "#F1F1F1",
    },
    dark: {
        isDark: true,
        primary: "#FF6464",
        textPrimary: "#FFFFFF",
        textSecondary: "#BABABA",
        backgroundPrimary: "#545974",
        backgroundSecondary: "#FFFFFF33",
        tint: "#F1F1F1",
    },
};
