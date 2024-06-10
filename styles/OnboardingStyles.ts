import { height, width } from "@/constants/constants";
import { getFontSize } from "@/constants/utilities";
import useTheme from "@/hooks/UseTheme";
import { StyleSheet } from "react-native";

const getOnboardingStyles = () => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            paddingTop: height * 0.01,
            paddingBottom: height * 0.03,
            paddingHorizontal: width * 0.04,
            justifyContent: "space-between",
            alignItems: "flex-start",
        },
        header: {
            height: height * 0.05,
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        logo: {
            objectFit: "contain",
            width: getFontSize("logo"),
        },
        hero: {
            height: height * 0.5,
            width: "100%",
        },
        slidesContainer: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: width - width * 0.08,
            gap: height * 0.05,
        },
        slideText: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "auto",
        },
        title: {
            color: theme.textPrimary,
            fontFamily: "Bebas Neue",
            fontSize: getFontSize("title"),
        },
        titleHighlighted: {
            fontFamily: "Bebas Neue",
            color: theme.primary,
            fontSize: getFontSize("title"),
        },
        subtitle: {
            fontFamily: "Poppins Regular",
            color: theme.textSecondary,
            letterSpacing: 0.5,
            fontSize: getFontSize("normal"),
        },
        footer: {
            height: height * 0.2,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-start",
            // paddingVertical: height * 0.02,
        },
        indicator: {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            height: height * 0.1,
            gap: 8,
            // borderWidth: 1,
        },
        activeIndicator: {
            color: theme.primary,
            fontSize: getFontSize("h1"),
            textAlign: "center",
            fontFamily: "Bebas Neue",
        },
        inactiveIndicator: {
            fontFamily: "Bebas Neue",
            color: theme.textSecondary,
            fontSize: getFontSize("h2"),
            textAlign: "center",
        },
        buttons: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: width * 0.02,
        },
        getStartedBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.primary,
        },
        skipBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            borderColor: theme.primary,
            marginRight: 10,
        },
        nextBtn: {
            flex: 1,
            height: height * 0.05,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.primary,
        },
    });

    return styles;
};

export default getOnboardingStyles;
