import { Layout, Typography } from "antd";
import { motion } from "motion/react";
import RatingTable from "../../components/RatingTable/RatingTable.tsx";
import { AnchorSection } from "../../lib/reactAnchorNavigation";
import styles from "./Rating.module.css";

const RatingPage = () => {
    return (
        <AnchorSection id="rating">
            <Layout className={styles.layout}>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }}
                    viewport={{ once: true }}
                    className={styles.container}
                >
                    <Typography.Title
                        id={"title"}
                        style={{ fontSize: 42, marginBottom: 50 }}
                    >
                        Рейтинг сайтов 🏆
                    </Typography.Title>
                    <RatingTable />
                </motion.div>
            </Layout>
        </AnchorSection>
    );
};

export default RatingPage;
