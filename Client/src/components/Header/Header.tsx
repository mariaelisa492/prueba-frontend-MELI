import './Header.scss'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png.png'
import { useState } from 'react';
import { getAllItems } from '../../services';
import { SearchDataContext } from '../../context/contextProducts';
import { useNavigate, Link } from 'react-router-dom';
import { useContext } from 'react';

const Header: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
    const { setSearchData } = useContext(SearchDataContext);
    const history = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await getAllItems(searchText);

            if (!response.items || response.items.length === 0) {
                history('/no-found');
                return;
            }

            setSearchData(response);
            history(`/items?search=${searchText}`);
            setSearchText('')
        } catch (error) {
            console.error('Error fetch data:', error);
        }
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="container-header">
            <div className="container-header__logo">
                <Link to={`/`} className="card-link">
                    <img className="container-header__logo--size"
                        src={Logo}
                        width={70}
                        height={34}
                        alt="logo-mercado-libre" />
                </Link>
            </div>
            <div className='container-header__search'>
                <div className='container-header__search--input'>
                    <input
                        className='container-header__search--input--field'
                        placeholder="Nunca dejes de buscar"
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                    />
                    <button className="container-header__search--input--button" onClick={handleSearch} type="button"><img src={Search} width="25" height="25" alt="buscar producto" /></button>
                </div>
            </div>
        </div>
    )
}

export default Header