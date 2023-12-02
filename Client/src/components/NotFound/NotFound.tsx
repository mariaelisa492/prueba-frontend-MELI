import './NotFound.scss'
import searchLogo from '../../assets/search-icon.png'

const NotFound = () => {
  return (
    <div className='container-home'>
            <section>
                <img  
                src={searchLogo}
                width={70}
                height={34}
                alt="logo-mercado-libre" />
            </section>
            <section>
                <h3 className='container-home__tile'>Escribe en el buscador lo que quieres encontrar.</h3>
                <ul><li><strong>'Escribe tu búsqueda'</strong> en el campo que figura en la parte superior de la pantalla.</li></ul>
            </section>
        </div>
    )
}

export default NotFound