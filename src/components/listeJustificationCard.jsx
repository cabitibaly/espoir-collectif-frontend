import { PropTypes } from "prop-types";

const ListeJustificationCard = ({cagnotte, montant, nom}) => {
    return (
        <div className="border border-solid border-gray-500 rounded-xl p-4 w-full flex items-start justify-center flex-col gap-2">                                                
            <p className="font-bold text-left text-2xl text-black max-450:text-xl">{cagnotte}</p>
            <p className="font-bold text-left text-lg text-black max-450:text-base">
                Vous avez fait un don d&apos;une valeur de <span className="font-black text-gray-600">{montant}</span> FCFA à <span className="font-black text-gray-600">{nom}</span>. 
                Nous vous remercions pour votre générosité.
            </p>
        </div>
    );
};

ListeJustificationCard.propTypes = {
    cagnotte: PropTypes.string,
    montant: PropTypes.number,
    nom: PropTypes.string,
}

export default ListeJustificationCard;