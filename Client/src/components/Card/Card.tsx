import './Card.scss'
import { Link } from 'react-router-dom';

interface CardProps {
    id: string;
    imageSrc: string;
    price: number;
    title: string;
    city: string;
}

const Card: React.FC<CardProps> = ({ id, imageSrc, price, title, city }) => {

    function formatCurrency(price:number) {
        const formattedAmount = Math.round(price).toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0,
        });
        return formattedAmount;
    }

    return (
        <Link to={`/items/${id}`} className="card-link">
            <div className="card-container">
                <div className="image-container">
                    <img src={imageSrc} alt="Product" className="product-image" />
                </div>
                <div className="info-container">
                    <p className="price">{formatCurrency(price)}</p>
                    <p className="text">{title}</p>
                </div>
                <div><span className="city">{city}</span></div>
            </div>
        </Link>
    );
};

export default Card;
