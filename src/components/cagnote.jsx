import { Link } from "react-router-dom";
// import handicap from '../assets/image/handicap.jpg';
import CagnoteCard from "./cagnoteCard";
import { useState, useEffect } from "react";

const Cagnote = () => {
    const [cagnottes, setCagnottes] = useState([]);

    const getCagnottes = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/cagnottes/', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        const data = await res.json();
        if(data.status == 200) {
            setCagnottes(data.message);
        } else {
            window.location.reload();
        }
    }

    useEffect(() => {

        getCagnottes();

    }, []);


    return (
        <section className="w-full z-40 p-4 flex items-center justify-center flex-col gap-4 md:px-16 ">
            <h4 className="self-start text-2xl text-dark font-bold">Collecte de fond urgente</h4>
            <div className="w-full grid grid-cols-2 items-center justify-center gap-4 max-750:flex max-750:flex-col lg:grid-cols-3 lg:w-full">
                
                { cagnottes.length > 0 ?
                    cagnottes.slice(0, 6).map((cagnotte, index) => (
                        <CagnoteCard 
                            key={index}
                            url={'/cagnote/detail/'+cagnotte.id}
                            image={`http://127.0.0.1:8000${cagnotte.image_url}`}
                            titre={cagnotte.intitule} 
                            pourcentage={` ${(cagnotte.montant_collecte / cagnotte.objectif_montant_vise) * 100}% `}
                            montantRecolte={cagnotte.montant_collecte}
                        /> 
                    ))
                    :
                    <div className="w-full h-44 flex flex-col items-center justify-center">
                        <h4 className="text-2xl text-dark font-bold">Aucune cagnotte à afficher</h4>
                    </div>
                }

            </div>
            <div className="fixed z-50 bottom-0 left-0 w-full h-16 bg-white shadow-top lg:hidden flex items-center justify-center">
                <Link to="/creer-une-cagnote" className="w-44 p-2 border border-solid border-green-800 text-center font-semibold text-white bg-green-800 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black ">Démarer une cagnote</Link>
            </div>
        </section>
    );
};
export default Cagnote;