import { Link } from "react-router-dom";
import hospital from "../assets/image/hospital.jpg";
import ListeCagnotteCard from "./listeCagnotteCard";

const ListeCagnotte = () => {
    return (
        <section className="w-full p-4 mt-20 flex items-start justify-center">
            <div className="p-4 w-3/6 flex items-center justify-center flex-col gap-4 max-1090:w-4/6 max-750:w-full">
                <div className="w-full p-2 flex items-center justify-between">
                    <span className="font-bold tracking-wide text-2xl text-black max-520:text-lg">Vos cagnottes</span>
                    <Link to="/creer-une-cagnote" className="w-52 p-3 max-520:p-3 max-520:text-xs max-520:w-36 text-center text-white text-lg font-semibold bg-green-700 rounded-xl transition duration-300 ease-in-out hover:border hover:bg-white hover:text-black">Demarrer un cagnotte</Link>
                </div>
                <ListeCagnotteCard urlCagnotte={'/cagnote/detail/id'} img={hospital} motif={'Une lumière au bout du tunnel'} />
                <ListeCagnotteCard urlCagnotte={'/cagnote/detail/id'} img={hospital} motif={'Une lumière au bout du tunnel'} />
            </div>
        </section>
    );
};
export default ListeCagnotte;