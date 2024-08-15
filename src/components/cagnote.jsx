import { Link } from "react-router-dom";
import handicap from '../assets/image/handicap.jpg';
import CagnoteCard from "./cagnoteCard";

const Cagnote = () => {

    const width = `${(30/100) * 100}%`;

    return (
        <section className="w-full z-40 p-4 flex items-center justify-center flex-col gap-4 md:px-16 ">
            <h4 className="self-start text-2xl text-dark font-bold">Collecte de fond urgente</h4>
            <div className="w-full grid grid-cols-2 items-center justify-center gap-4 max-750:flex max-750:flex-col lg:grid-cols-3 lg:w-full">
                <CagnoteCard 
                    url={'/cagnote/detail/id'} 
                    image={handicap}
                    titre={'Senior health malade Senior health malade'} 
                    pourcentage={width}
                    montantRecolte={'19 187'}
                />                                           
                <CagnoteCard 
                    url={'/cagnote/detail/id'} 
                    image={handicap}
                    titre={'Senior health malade Senior health malade'} 
                    pourcentage={width}
                    montantRecolte={'19 187'}
                />                                           
                <CagnoteCard 
                    url={'/cagnote/detail/id'} 
                    image={handicap}
                    titre={'Senior health malade Senior health malade'} 
                    pourcentage={width}
                    montantRecolte={'19 187'}
                />                                           
                <CagnoteCard 
                    url={'/cagnote/detail/id'} 
                    image={handicap}
                    titre={'Senior health malade Senior health malade'} 
                    pourcentage={width}
                    montantRecolte={'19 187'}
                />                                           
                <CagnoteCard 
                    url={'/cagnote/detail/id'} 
                    image={handicap}
                    titre={'Senior health malade Senior health malade'} 
                    pourcentage={width}
                    montantRecolte={'19 187'}
                />                                           
            </div>
            <div className="fixed z-50 bottom-0 left-0 w-full h-16 bg-white shadow-top lg:hidden flex items-center justify-center">
                <Link to="" className="w-44 p-2 border border-solid border-green-800 text-center font-semibold text-white bg-green-800 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black ">Démarer une cagnote</Link>
            </div>
        </section>
    );
};
export default Cagnote;