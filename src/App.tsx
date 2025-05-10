import {Reset} from "styled-reset";
import {Typography, Table, Flex, Button} from "antd";
import styles from "./App.module.css"

function App() {

    const dataSource = [
        {
            key: '1',
            name: 'Пикабу',
            aggressive_words: 32,
        },
        {
            key: '2',
            name: 'Women.ru',
            aggressive_words: 42,
        },
        {
            key: '3',
            name: 'Двач',
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
            title: 'Название сайта',
            dataIndex: 'name',
            key: 'name',
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
                <a href="https://github.com/" target="_blank">
                    <Button onClick={()=> console.log(record)}>
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
