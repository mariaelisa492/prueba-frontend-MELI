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
                <div className="card-container__image">
                    <img src={imageSrc} alt="Product" className="card-container__image--size" />
                </div>
                <div className="card-container__info">
                    <p className="card-container__info--price">{formatCurrency(price)}</p>
                    <p className="card-container__info--text">{title}</p>
                </div>
                <div className="card-container__city--title"><span className="card-container__city--title">{city}</span></div>
            </div>
        </Link>
    );
};

export default Card;
