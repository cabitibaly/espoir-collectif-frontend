import { Link } from "react-router-dom";
import ListeJustificationCard from "./listeJustificationCard";

const ListeJustification = () => {
    return (
        <>
            <div className="w-full p-4 mt-20 flex items-start justify-center">
                <div className="p-4 w-3/6 flex items-center justify-center flex-col gap-4 max-1090:w-4/6 max-750:w-full">
                    <div className="w-full p-2 flex items-center justify-between">
                        <span className="font-bold tracking-wide text-2xl text-black max-520:text-lg max-450:hidden">Vos Justification</span>
                        <Link to="/justification/je-fais-une-justification" className="w-52 p-3 max-520:p-3 max-520:text-xs max-520:w-36 max-450:w-full text-center text-white text-lg font-semibold bg-green-700 rounded-xl transition duration-300 ease-in-out hover:border hover:bg-white hover:text-black">Faire une justification</Link>
                    </div>
                    <ListeJustificationCard cagnotte={'Une lunière au bout du tunnel'} montant={10000} nom={'Alison Smith'} />
                    <ListeJustificationCard cagnotte={'Une lunière au bout du tunnel'} montant={30000} nom={'Johanna Smith'} />
                    <ListeJustificationCard cagnotte={'Une lunière au bout du tunnel'} montant={1000} nom={'Lara backer'} />
                    <ListeJustificationCard cagnotte={'Une lunière au bout du tunnel'} montant={50000} nom={'Harry Walter'} />
                </div>
            </div>
        </>
    );
};
export default ListeJustification;