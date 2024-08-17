import { Link } from "react-router-dom";
import yard from '../assets/image/yard.jpg'

const CommentUtiliser = () => {
    return (
        <section className="mt-10 w-full z-40 p-2 flex items-center justify-center flex-col gap-4 md:px-16">
            <div className="w-full flex items-center justify-between gap-4 max-520:justify-center">
                <h4 className="text-2xl text-left text-dark font-bold max-750:text-lg">Comment fonctionne Espoir collectif</h4>
                <Link to="/comment-ça-marche" className="border border-solid border-black p-2 bg-white rounded-xl hover:bg-gray-100 text-dark text-base font-bold max-520:hidden">En savoir plus</Link>
            </div>
            <div className="w-full p-4 flex items-center justify-center gap-8 flex-wrap">
                <img src={yard} alt="yard" className="w-full h-80 object-cover rounded-xl" />
                <Link to="/comment-ça-marche" className="border border-solid border-black p-2 bg-white rounded-xl hover:bg-gray-100 hidden max-520:flex text-dark text-base font-bold">En savoir plus</Link>
            </div>
        </section>
    );
};
export default CommentUtiliser;