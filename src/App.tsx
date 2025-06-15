import { Layout } from "antd";
import "react-photo-view/dist/react-photo-view.css";
import { Reset } from "styled-reset";
import styles from "./App.module.css";
import GetStarted from "./sections/GetStarted/GetStarted.tsx";
import OnboardingPage from "./sections/Onboarding/Onboarding.tsx";
import RatingPage from "./sections/Rating/Rating.tsx";
import "./styles.css";

function App() {
    return (
        <>
            <Reset />
            <Layout className={styles.wrapper}>
                <Layout.Content className={styles.content}>
                    <OnboardingPage />
                    <RatingPage />
                    <GetStarted />
                </Layout.Content>
            </Layout>
        </>
    );
}

export default App;
