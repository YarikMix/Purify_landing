import {Reset} from "styled-reset";
import {Typography, Table, Flex, Button, TablePaginationConfig} from "antd";
import styles from "./App.module.css"
import {API_URL, HTTPS_SHEMA} from "./const.ts";
import {useEffect, useState} from "react";
import {siteItem} from "./types.ts";
import {ColumnsType} from "antd/es/table";
import axios from 'axios';
import "./styles.css"

function App() {

    const [rating, setRating] = useState<siteItem[]>()

    const fetchRating = async () => {
        const response = await axios.get<siteItem[]>(API_URL + "/get_all_rating")
        setRating(response.data)
    }

    useEffect(() => {
        fetchRating()
    }, [])

    const columns:ColumnsType<siteItem> = [
        {
            title: 'Место',
            key: 'key',
            align: 'center' as const,
            render: (_:string, __:object, idx) => idx + 1
        },
        {
            title: 'Сайт',
            key: 'site',
            dataIndex: "site",
            align: 'center' as const
        },
        {
            title: 'Кол-во найденных агрессивных слов',
            key: 'aggressive_words',
            dataIndex: "aggressive_words",
            align: 'center' as const
        },
        {
            title: 'Ссылка на сайт',
            key: 'link',
            align: 'center' as const,
            render: (_:string, record:siteItem) => (
                <a href={HTTPS_SHEMA + record?.site} target="_blank">
                    <Button className={styles.btn}>
                        Открыть
                    </Button>
                </a>
            )
        },
    ];

    const paginationConfig: TablePaginationConfig = {
        pageSize: 5
    } as TablePaginationConfig

    const tableEmptyText = {
        emptyText: 'Не хватает данных'
    }

    if (!rating) {
        return null
    }

    return (
        <>
            <Reset />
            <Flex className={styles.wrapper} vertical>
                <Flex className={styles.titleContainer}>
                    <Typography.Title id={"title"} style={{color: "white"}}>Purify</Typography.Title>
                    <div className={styles.comingSoonContainer}>
                        <Typography.Text className={styles.comingSoonLabel}>Скоро в Chrome<br/> Web Store</Typography.Text>
                        <img src="/GoogleChromeWebStoreIcon.svg" className={styles.chromeStoreLogo} alt="ChromeWebStoreLogo" />
                    </div>
                </Flex>
                <Flex vertical className={styles.ratingContainer}>
                    <Typography.Title id={"ratingPanelTitle"}>Рейтинг безопасных сайтов 🏆</Typography.Title>
                    <Table dataSource={rating} columns={columns} pagination={paginationConfig} locale={tableEmptyText} rowKey="site" />
                </Flex>
            </Flex>
        </>
    )
}

export default App
