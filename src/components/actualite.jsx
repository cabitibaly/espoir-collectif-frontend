import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import hostipal from '../assets/image/hospital.jpg'

const Actualite = () => {
    return (
        <section className="mt-10 w-full z-40 p-2 flex items-center justify-center flex-col gap-4 md:px-16">
            <h4 className="self-start text-2xl text-dark font-bold">Sujet à la une</h4>
            <div className="w-full p-4 flex items-center justify-center gap-8 flex-wrap">
                <Link to="" className="group flex-30 h-450 rounded-xl flex flex-col gap-4 transition duration-300 ease-in-out hover:bg-gray-100 max-750:h-auto">
                    <img src={hostipal} className="w-full h-3/5 object-cover rounded-t-xl" alt="" />
                    <div className="p-4 h-2/5 flex flex-col gap-4">
                        <p className="font-extrabold text-xl text-dark max-520:text-base">Lever de fond pour aider les populations en difficultés</p>
                        <p className="font-medium text-lg text-gray-600 max-520:hidden">
                            Avec vos fonds, nous achèterons de la nourriture, des générateurs de fournitures et tous les articles nécessaires à la population locale.
                        </p>
                        <div className="font-bold text-xs md:text-base text-dark flex items-center transition duration-300 ease-in-out group-hover:translate-x-4">Je soutiens <ChevronRight size={22} strokeWidth={2} color="black" /></div>
                    </div>
                </Link>
                <Link to="" className="group flex-30 h-450 rounded-xl flex flex-col gap-4 transition duration-300 ease-in-out hover:bg-gray-100 max-750:h-auto">
                    <img src={hostipal} className="w-full h-3/5 object-cover rounded-t-xl" alt="" />
                    <div className="p-4 h-2/5 flex flex-col gap-4">
                        <p className="font-extrabold text-xl text-dark max-520:text-base">Lever de fond pour aider les populations en difficultés</p>
                        <p className="font-medium text-lg text-gray-600 max-520:hidden">
                            Avec vos fonds, nous achèterons de la nourriture, des générateurs de fournitures et tous les articles nécessaires à la population locale.
                        </p>
                        <div className="font-bold text-xs md:text-base text-dark flex items-center transition duration-300 ease-in-out group-hover:translate-x-4">Je soutiens <ChevronRight size={22} strokeWidth={2} color="black" /></div>
                    </div>
                </Link>
            </div>
        </section>
    );
};
export default Actualite;