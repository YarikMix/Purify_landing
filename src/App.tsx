import {Reset} from "styled-reset";
import {Typography, Table, Flex, Button, TablePaginationConfig} from "antd";
import styles from "./App.module.css"
import {API_URL, HTTPS_SHEMA} from "./const.ts";
import {useEffect, useState} from "react";
import {siteItem} from "./types.ts";
import {ColumnsType} from "antd/es/table";
import axios from 'axios';

function App() {

    const [rating, setRating] = useState<siteItem[]>()

    const fetchRating = async () => {
        const response = await axios.get(API_URL + "/get_all_rating")
        setRating(response.data)
    }

    useEffect(() => {
        fetchRating()
    }, [])

    const columns:ColumnsType = [
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
            render: (_:string, record) => (
                <a href={HTTPS_SHEMA + record.site} target="_blank">
                    <Button>
                        Открыть
                    </Button>
                </a>
            ),
        },
    ];

    const paginationConfig: TablePaginationConfig = {
        pageSize: 5
    } as TablePaginationConfig

    return (
        <>
            <Reset />
            <Flex className={styles.wrapper}>
                <Flex vertical gap="middle" className={styles.container}>
                    <Typography.Title level={1}>Рейтинг безопасных сайтов 🏆</Typography.Title>
                    <Table dataSource={rating} columns={columns} pagination={paginationConfig} />
                </Flex>
            </Flex>
        </>
    )
}

export default App
