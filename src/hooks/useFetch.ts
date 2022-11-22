import { useState, useEffect } from "react";


export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (): Promise<void> => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
            .catch((error) => setError(error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, error, loading] as const;
};
