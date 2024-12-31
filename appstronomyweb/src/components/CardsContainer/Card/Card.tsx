import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px" }}>
      <h2>{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <p>{description}</p>
    </div>
  );
};

export default Card;
