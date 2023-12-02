
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemByIdProduct } from '../../services';
import './CardDetail.scss'
import Breadcrumps from '../Breadcrumps/Breadcrumps';

interface ProductById {
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    }
  };
  picture: string;
  condition: string;
  description: string;
  categoriesByProduct: string | undefined;
}


export const CardDetail: React.FC = () => {

  const { id } = useParams();
  const [product, setProduct] = useState<ProductById | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productById = await getItemByIdProduct(id);
        setProduct(productById);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const formatCurrency = (price: any) => {
    const formattedAmount = Math.round(price).toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    });
    return formattedAmount;
  }

  return (
    <>
      <Breadcrumps categoriesByProduct={product?.categoriesByProduct}></Breadcrumps>
      <div className="card-detail-container">
        <div className='card-detail-container__info'>
          <div className="card-detail-container__info--image">
            <img src={product?.picture} alt="Product"/>
          </div>
          <div className="card-detail-container__info--data">
            <span className="card-detail-container__info--data--condition">{product?.condition === 'new' ? 'Nuevo' : ''}</span>
            <h3 className="card-detail-container__info--data--title">{product?.item.title}</h3>
            <p className="card-detail-container__info--data--price">{product?.item?.price?.amount ? formatCurrency(product.item.price.amount) : ''}</p>
            <button className="card-detail-container__info--data--button">Comprar</button>
          </div>
        </div>
        <div className="card-detail-container__description">
          <h4>Descripción del producto</h4>
          <p className="card-detail-container__description--content">{product?.description ? product?.description : 'Sin descripción'}</p>
        </div>
      </div>
    </>

  );
};

