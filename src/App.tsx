import {Reset} from "styled-reset";
import {Typography, Table, Flex, Button} from "antd";
import styles from "./App.module.css"

const HTTPS_SHEMA = "https://"

function App() {

    const dataSource = [
        {
            key: '1',
            site: 'github.com',
            aggressive_words: 32,
        },
        {
            key: '2',
            site: 'www.woman.ru',
            aggressive_words: 42,
        },
        {
            key: '3',
            site: '2ch.hk',
            aggressive_words: 4232,
        },
    ];

    const columns = [
        {
            title: 'Место',
            dataIndex: 'key',
            key: 'key',
            align: 'center' as const,
        },
        {
            title: 'Сайт',
            dataIndex: 'site',
            key: 'site',
            align: 'center' as const,
        },
        {
            title: 'Кол-во найденных агрессивных слов',
            dataIndex: 'aggressive_words',
            key: 'aggressive_words',
            align: 'center' as const,
        },
        {
            title: 'Ссылка на сайт',
            key: 'key',
            dataIndex: 'key',
            align: 'center' as const,
            render: (text, record) => (
                <a href={HTTPS_SHEMA + record.site} target="_blank">
                    <Button>
                        Открыть
                    </Button>
                </a>
            ),
        },
    ];

    return (
        <>
            <Reset />
            <Flex className={styles.wrapper}>
                <Flex vertical gap="middle" className={styles.container}>
                    <Typography.Title level={1}>Рейтинг безопасных сайтов 🏆</Typography.Title>
                    <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5 }} />
                </Flex>
            </Flex>
        </>
    )
}

export default App
