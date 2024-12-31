import React, { useEffect, useState } from "react";
import { fetchApodData } from "../../../services/apodService";

interface ApodData {
    title: string;
    url: string;
    explanation: string;
}

const ApodCard: React.FC = () => {
    const [data, setData] = useState<ApodData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchApodData({ date: "2006-04-01" }); // Esto le tiene que llegar desde el padre
                setData({
                    title: result.title,
                    url: result.url,
                    explanation: result.explanation,
                });
            } catch (err) {
                setError("No se pudo obtener los datos de APOD.");
                console.error(err);
            }
        };

        getData();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!data) {
        return <p>Cargando...</p>;
    }

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
            <h2>{data.title}</h2>
            <img
                src={data.url}
                alt={data.title}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{data.explanation}</p>
        </div>
    );
};

export default ApodCard;
