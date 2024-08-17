import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const CagnoteCard = ({url, image, titre, pourcentage, montantRecolte}) => {
    return (
        <Link to={url} className="bg-white rounded-lg transition duration-150 ease-in hover:bg-gray-100 hover:scale-95 flex flex-col gap-4 max-750:gap-1 max-750:flex-row max-750:h-32 max-750:w-full">
            <img className="rounded-xl h-64 w-full object-cover max-750:h-full max-750:w-40" src={image} alt="" />
            <div className="p-1 flex items-start justify-center flex-col gap-2 lg:gap-4 lg:p-4 max-750:w-full">
                <p className="self-start w-full text-xl font-semibold  max-750:text-sm max-520:text-xs max-520:line-clamp-2">{titre}</p>
                <div className="w-full h-2 bg-gray-200 rounded-full max-750:h-1">
                    <div style={{width: pourcentage}} className="h-full bg-green-600 rounded-full"></div>
                </div>
                <p className="self-start font-bold text-xl text-dark max-750:text-sm max-520:text-xs">{montantRecolte} CFA dons récoltés</p>
            </div>
        </Link>  
    );
};

CagnoteCard.propTypes = {
    url: PropTypes.string,
    image: PropTypes.string,
    titre: PropTypes.string,
    pourcentage: PropTypes.string,
    montantRecolte: PropTypes.number,
};

export default CagnoteCard;