import { PixelRatio } from "react-native";
import { width } from "./constants";

export function getFontSize(style: string): number {
    const styles: { [key: string]: number } = {
        title: 5,
        normal: 34,
        h1: 16,
        h2: 20,
        logo: 12,
    };
    const fontScale = PixelRatio.getFontScale();
    const size = styles[style];
    const fontsize = width / size / fontScale;

    return fontsize;
}
