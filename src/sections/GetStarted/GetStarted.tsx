import { Button, Layout, Typography } from "antd";
import {
    RiNumber1,
    RiNumber2,
    RiNumber3,
    RiNumber4,
    RiNumber5,
    RiNumber6,
    RiNumber7,
} from "react-icons/ri";
import { PhotoView } from "react-photo-view";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnchorSection } from "../../lib/reactAnchorNavigation";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
    return (
        <AnchorSection id="getStarted">
            <Layout className={styles.layout}>
                <Typography.Title id={"title"} className={styles.title}>
                    Инструкция по установке 📖
                </Typography.Title>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        contentArrowStyle={{
                            borderRight: "7px solid  rgb(33, 150, 243)",
                        }}
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber1 />}
                    >
                        <Typography.Title
                            style={{ color: "white" }}
                            className={styles.subtitle}
                        >
                            Скачайте архив с расширением
                        </Typography.Title>
                        <Button
                            style={{ fontSize: 18 }}
                            href="https://purify.pro/download"
                        >
                            Скачать
                        </Button>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber2 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            Распакуйте архив в отдельную папку
                        </Typography.Title>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber3 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            В хроме откройте меню «Настройки» и перейдите в
                            раздел "Расширения"
                        </Typography.Title>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber4 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            Активируйте флаг «Режим разработчика»
                        </Typography.Title>
                        <PhotoView src="public/screen.png">
                            <img
                                src="public/screen.png"
                                className={styles.image}
                            />
                        </PhotoView>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber5 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            Нажмите «Загрузить распакованное расширение»
                        </Typography.Title>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "rgb(33, 150, 243)",
                            color: "#fff",
                        }}
                        icon={<RiNumber6 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            Укажите путь до папки с расширением
                        </Typography.Title>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        iconStyle={{
                            background: "rgb(233, 30, 99)",
                            color: "#fff",
                        }}
                        icon={<RiNumber7 />}
                    >
                        <Typography.Title className={styles.subtitle}>
                            Вы восхитительны!
                        </Typography.Title>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Layout>
        </AnchorSection>
    );
};

export default GetStarted;
