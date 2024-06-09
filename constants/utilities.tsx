import { PixelRatio } from "react-native";
import { width } from "./constants";

export function getFontSize(style: string): number {
    const styles: { [key: string]: number } = {
        title: 6,
        normal: 32,
        h1: 16,
        h2: 20,
    };
    const fontScale = PixelRatio.getFontScale();
    const size = styles[style];
    const fontsize = width / size / fontScale;

    return fontsize;
}
