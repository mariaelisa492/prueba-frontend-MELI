
import './CardDetail.css'; 
import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

interface CardProps {
    id: string;
    imageSrc: string;
    price: number;
    title: string;
    city: string;
    condition: string
}

export const CardDetail: React.FC<CardProps> = ({ id, imageSrc, price, title, city, condition }) => {

    const { idP } = useParams();
    const [product, setProduct] = useState(null);

  return (
    <div className="card-detail">
      <div className="image-container">
        <img src={imageSrc} alt="Product" className="product-image" />
      </div>
      <div className="info-container">
        <h2 className="title">{title}</h2>
        <p className="price">{`Precio: ${price}`}</p>
        <span className="condition">{`Condición: ${condition}`}</span>
        <button className="buy-button">Comprar</button>
      </div>
      <div className="additional-info">
        <p className="additional-button">Otra acción</p>
      </div>
    </div>
  );
};

