import { Typography } from "antd";
import styles from "./ComingSoon.module.css";

const ComingSoon = () => {
    return (
        <div className={styles.comingSoonContainer}>
            <Typography.Text className={styles.comingSoonLabel}>
                Скоро в Chrome
                <br /> Web Store
            </Typography.Text>
            <img
                src="/GoogleChromeWebStoreIcon.svg"
                className={styles.chromeStoreLogo}
                alt="ChromeWebStoreLogo"
            />
        </div>
    );
};

export default ComingSoon;
