import useTheme from "@/hooks/UseTheme";
import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NamedIcon = (props: any) => {
    const { theme } = useTheme();

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={69}
            height={69}
            fill="none"
            {...props}
        >
            <Path
                fill="#FF6464"
                d="M19 28.333h30c.917 0 1.667.75 1.667 1.667s-.75 1.667-1.667 1.667H19c-.917 0-1.667-.75-1.667-1.667s.75-1.667 1.667-1.667Zm-.833-7.383c.6.35 1.366.133 1.716-.467l.784-1.366.8 1.383c.35.6 1.116.8 1.716.467.6-.35.8-1.1.467-1.7l-.817-1.4h1.584a1.26 1.26 0 0 0 1.25-1.25 1.26 1.26 0 0 0-1.25-1.25h-1.584L23.617 14c.35-.6.15-1.367-.45-1.717a1.274 1.274 0 0 0-1.717.467l-.783 1.367-.784-1.367a1.273 1.273 0 0 0-1.716-.467c-.6.35-.8 1.117-.45 1.717l.783 1.367h-1.583c-.684 0-1.25.566-1.25 1.25 0 .683.566 1.25 1.25 1.25H18.5l-.8 1.383c-.333.6-.133 1.367.467 1.7Zm13.333 0c.6.35 1.367.133 1.717-.467L34 19.117l.8 1.383c.35.6 1.117.8 1.717.467.6-.35.8-1.1.466-1.7l-.8-1.384h1.584a1.26 1.26 0 0 0 1.25-1.25 1.26 1.26 0 0 0-1.25-1.25h-1.6l.783-1.366a1.267 1.267 0 0 0-.45-1.717 1.243 1.243 0 0 0-1.7.45l-.8 1.367-.783-1.367a1.24 1.24 0 0 0-1.7-.45c-.6.35-.8 1.117-.45 1.717l.783 1.366h-1.6A1.233 1.233 0 0 0 29 16.617c0 .683.567 1.25 1.25 1.25h1.583l-.8 1.383c-.333.6-.133 1.367.467 1.7Zm20.833-4.333c0-.684-.566-1.25-1.25-1.25H49.5L50.283 14a1.266 1.266 0 0 0-.45-1.717 1.244 1.244 0 0 0-1.7.45l-.8 1.384-.783-1.367a1.238 1.238 0 0 0-1.7-.45c-.6.35-.8 1.117-.45 1.717l.783 1.366H43.6a1.238 1.238 0 0 0-1.267 1.234c0 .683.567 1.25 1.25 1.25h1.584l-.8 1.383a1.232 1.232 0 0 0 .466 1.7c.6.35 1.367.133 1.717-.467l.783-1.366.8 1.383c.35.6 1.117.8 1.717.467.6-.35.8-1.1.467-1.7l-.8-1.384H51.1a1.282 1.282 0 0 0 1.233-1.266ZM4.8 62.24c-1.296 0-2.288-.368-2.976-1.104C1.136 60.4.792 59.36.792 58.016v-8.832c0-1.344.344-2.384 1.032-3.12.688-.736 1.68-1.104 2.976-1.104s2.288.368 2.976 1.104c.688.736 1.032 1.776 1.032 3.12v8.832c0 1.344-.344 2.384-1.032 3.12-.688.736-1.68 1.104-2.976 1.104Zm0-2.4c.912 0 1.368-.552 1.368-1.656v-9.168c0-1.104-.456-1.656-1.368-1.656-.912 0-1.368.552-1.368 1.656v9.168c0 1.104.456 1.656 1.368 1.656Zm5.793-14.64h3.312l2.568 10.056h.048V45.2h2.352V62h-2.712l-3.168-12.264h-.048V62h-2.352V45.2Zm10.243 0h7.2v2.4h-4.56v4.44H27.1v2.4h-3.624v5.16h4.56V62h-7.2V45.2Z"
            />
            <Path
                fill={theme.textPrimary}
                d="M33.398 45.2h3.888c1.312 0 2.296.352 2.952 1.056.656.704.984 1.736.984 3.096v1.656c0 1.36-.328 2.392-.984 3.096-.656.704-1.64 1.056-2.952 1.056h-1.248V62h-2.64V45.2Zm3.888 7.56c.432 0 .752-.12.96-.36.224-.24.336-.648.336-1.224v-1.992c0-.576-.112-.984-.336-1.224-.208-.24-.528-.36-.96-.36h-1.248v5.16h1.248Zm6.566-7.56h3.576L50.164 62h-2.64l-.48-3.336v.048h-3L43.564 62h-2.448l2.736-16.8Zm2.88 11.232-1.176-8.304h-.048l-1.152 8.304h2.376Zm8.075 5.808c-1.28 0-2.248-.36-2.904-1.08-.656-.736-.984-1.784-.984-3.144v-.96h2.496v1.152c0 1.088.456 1.632 1.368 1.632.448 0 .784-.128 1.008-.384.24-.272.36-.704.36-1.296 0-.704-.16-1.32-.48-1.848-.32-.544-.912-1.192-1.776-1.944-1.088-.96-1.848-1.824-2.28-2.592-.432-.784-.648-1.664-.648-2.64 0-1.328.336-2.352 1.008-3.072.672-.736 1.648-1.104 2.928-1.104 1.264 0 2.216.368 2.856 1.104.656.72.984 1.76.984 3.12v.696h-2.496v-.864c0-.576-.112-.992-.336-1.248-.224-.272-.552-.408-.984-.408-.88 0-1.32.536-1.32 1.608 0 .608.16 1.176.48 1.704.336.528.936 1.168 1.8 1.92 1.104.96 1.864 1.832 2.28 2.616.416.784.624 1.704.624 2.76 0 1.376-.344 2.432-1.032 3.168-.672.736-1.656 1.104-2.952 1.104Zm8.93 0c-1.28 0-2.249-.36-2.905-1.08-.656-.736-.984-1.784-.984-3.144v-.96h2.496v1.152c0 1.088.456 1.632 1.368 1.632.448 0 .784-.128 1.008-.384.24-.272.36-.704.36-1.296 0-.704-.16-1.32-.48-1.848-.32-.544-.912-1.192-1.776-1.944-1.088-.96-1.848-1.824-2.28-2.592-.432-.784-.648-1.664-.648-2.64 0-1.328.336-2.352 1.008-3.072.672-.736 1.648-1.104 2.928-1.104 1.264 0 2.216.368 2.856 1.104.656.72.984 1.76.984 3.12v.696h-2.496v-.864c0-.576-.112-.992-.336-1.248-.224-.272-.552-.408-.984-.408-.88 0-1.32.536-1.32 1.608 0 .608.16 1.176.48 1.704.336.528.936 1.168 1.8 1.92 1.104.96 1.864 1.832 2.28 2.616.416.784.624 1.704.624 2.76 0 1.376-.344 2.432-1.032 3.168-.672.736-1.656 1.104-2.952 1.104Z"
            />
        </Svg>
    );
};
export default NamedIcon;
