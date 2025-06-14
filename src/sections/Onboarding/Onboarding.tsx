import { Flex, Layout, Typography } from "antd";
import ReactPlayer from "react-player";

import styles from "./Onboarding.module.css";

import { motion } from "motion/react";
import { AnchorSection } from "react-anchor-navigation";
import ComingSoon from "../../components/ComingSoon/ComingSoon.tsx";

const OnboardingPage = () => {
    return (
        <AnchorSection id="onboarding">
            <Layout className={styles.layout}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                        }}
                    >
                        <Flex className={styles.infoContainer} vertical>
                            <Typography.Title
                                id={"title"}
                                style={{ color: "white" }}
                            >
                                Purify
                            </Typography.Title>
                            <Typography.Paragraph
                                className={styles.description}
                            >
                                Это браузерное расширение, нацеленное на защиту
                                пользователей от агрессии в интернете
                            </Typography.Paragraph>
                        </Flex>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay: 0.4,
                        }}
                        className={styles.bannerContainer}
                    >
                        <ReactPlayer
                            url="public/mock.mp4"
                            width={400}
                            height={"100%"}
                            muted={true}
                            playsinline={true}
                            playing={true}
                            loop={true}
                        />
                        <div className={styles.comingSoonWrapper}>
                            <ComingSoon />
                        </div>
                    </motion.div>
                </div>
            </Layout>
        </AnchorSection>
    );
};

export default OnboardingPage;
