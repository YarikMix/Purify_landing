import { Layout } from "antd";
import "react-photo-view/dist/react-photo-view.css";
import { Reset } from "styled-reset";
import styles from "./App.module.css";
import GetStarted from "./sections/GetStarted/GetStarted.tsx";
import Promo from "./sections/Promo/Promo.tsx";
import Rating from "./sections/Rating/Rating.tsx";

import "./styles.css";

function App() {
    return (
        <>
            <Reset />
            <Layout className={styles.wrapper}>
                <Layout.Content className={styles.content}>
                    <Promo />
                    <Rating />
                    <GetStarted />
                </Layout.Content>
            </Layout>
        </>
    );
}

export default App;
