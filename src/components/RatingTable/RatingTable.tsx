import { Button, Flex, Table, TablePaginationConfig } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL, HTTPS_SHEMA } from "../../const.ts";
import { siteItem } from "../../types.ts";
import styles from "./RatingTable.module.css";

const RatingTable = () => {
    const [rating, setRating] = useState<siteItem[]>();

    const fetchRating = async () => {
        const response = await axios.get<siteItem[]>(
            API_URL + "/get_all_rating"
        );
        setRating(response.data);
    };

    useEffect(() => {
        fetchRating();
    }, []);

    const columns: ColumnsType<siteItem> = [
        {
            title: "Место",
            key: "key",
            align: "center" as const,
            render: (_: string, record: siteItem) => record.place,
        },
        {
            title: "Сайт",
            key: "site",
            dataIndex: "site",
            align: "center" as const,
        },
        {
            title: "Кол-во найденных агрессивных слов",
            key: "aggressive_words",
            dataIndex: "aggressive_words",
            align: "center" as const,
        },
        {
            title: "Ссылка на сайт",
            key: "link",
            align: "center" as const,
            render: (_: string, record: siteItem) => (
                <a href={HTTPS_SHEMA + record?.site} target="_blank">
                    <Button className={styles.btn}>Открыть</Button>
                </a>
            ),
        },
    ];

    const paginationConfig: TablePaginationConfig = {
        pageSize: 5,
    } as TablePaginationConfig;

    const tableEmptyText = {
        emptyText: "Не хватает данных",
    };

    if (!rating) {
        return null;
    }

    return (
        <Flex vertical className={styles.ratingContainer}>
            <Table
                dataSource={rating}
                columns={columns}
                pagination={paginationConfig}
                locale={tableEmptyText}
                rowKey="site"
            />
        </Flex>
    );
};

export default RatingTable;
