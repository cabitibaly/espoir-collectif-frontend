import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="w-full h-screen z-40 flex items-center justify-center bg-hero-bg bg-no-repeat bg-cover">
            <div className="w-2/5 p-4 flex items-center justify-center flex-col gap-2 max-1090:w-full max-750:p-10">
                <span className="font-semibold text-center text-xl text-gray-700 max-1250:text-base">Toujours donner pour les nécessiteux</span>
                <h1 className="font-bold text-center text-4xl text-dark max-1250:text-2xl">Donner un coup de main à ceux qui sont dans le besoin</h1>
                <Link to="/start" className="w-52 p-3 mt-4 text-center text-white text-lg font-semibold bg-green-700 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black">Creer une cagnote</Link>
            </div>
        </section>
    );
};
export default Hero;