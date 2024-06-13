import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faGlobe, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Hospedagens</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Voos</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Aluguel de Carros</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faGlobe} />
                <span>Atrações</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Táxis (aeroporto)</span>
            </div>
        </div>

        <h1 className="headerTitle">Encontre a sua próxima estadia.</h1>
        <p className="headerDescription">
            Encontre ofertas em hotéis, casas, apartamentos e muito mais...
        </p>

        </div>
        Header
    </div>
  )
}

export default Header