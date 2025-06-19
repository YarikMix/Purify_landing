import { Flex, Layout, Typography } from "antd";
import ReactPlayer from "react-player";

import styles from "./Promo.module.css";

import { motion } from "motion/react";
import ComingSoon from "../../components/ComingSoon/ComingSoon.tsx";
import { AnchorSection } from "../../lib/reactAnchorNavigation";

const Promo = () => {
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
                        <div className={styles.videoWrapper}>
                            <ReactPlayer
                                url="public/plugin.mp4"
                                width="100%"
                                height="100%"
                                muted
                                playsinline
                                playing
                                loop
                                className="react-player"
                            />
                        </div>
                        <div className={styles.comingSoonWrapper}>
                            <ComingSoon />
                        </div>
                    </motion.div>
                </div>
            </Layout>
        </AnchorSection>
    );
};

export default Promo;
