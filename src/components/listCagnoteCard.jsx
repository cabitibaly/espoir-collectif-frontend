import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const ListCagnoteCard = ({urlCagnotte, img, motif}) => {
    return (
        <div className="border border-solid border-gray-500 rounded-xl p-4 w-full flex items-center justify-center gap-2 max-650:flex-col">
            <img src={img} alt='hostpital' className="w-2/6 h-full object-cover rounded-lg max-650:w-full" />
            <div className="w-4/6 flex items-start justify-center flex-col gap-4 max-650:w-full">
                <p className="font-bold text-left text-lg text-black">{motif}</p>
                <Link to={urlCagnotte} className="w-28 p-2 text-center text-black text-lg font-semibold border border-solid border-black bg-white rounded-xl transition duration-300 ease-in-out hover:border-gray-300 hover:bg-gray-100">Afficher</Link>
            </div>
        </div>
    );
};

ListCagnoteCard.propTypes = {
    urlCagnotte: PropTypes.string,
    img: PropTypes.string,
    motif: PropTypes.string,
};

export default ListCagnoteCard;