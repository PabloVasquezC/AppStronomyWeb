import React, { useEffect, useState } from "react";
import { fetchNasaData } from "../../services/nasaService"; 
import Card from "./Card/Card";

interface NasaData {
  title: string;
  url: string; 
  explanation: string;
}

const CardContainer: React.FC = () => {
  const [data, setData] = useState<NasaData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchNasaData("planetary/apod", { date: "2024-01-01" }); 
        setData({
          title: result.title,
          url: result.url,
          explanation: result.explanation,
        });
      } catch (err) {
        setError("No se pudo obtener los datos de la API de la NASA.");
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
    <Card
      title={data.title}
      imageUrl={data.url}
      description={data.explanation}
    />
  );
};

export default CardContainer;
