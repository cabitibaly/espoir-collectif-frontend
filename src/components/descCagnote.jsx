import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { HandHeart } from 'lucide-react';
// import hospital from '../assets/image/hospital.jpg'
import profile from '../assets/image/profil.jpg'
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import Dons from "./dons";

const DescCagnote = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [showDonation, setShowDonation] = useState(false);
    const [cagnotte, setCagnotte] = useState({});
    const [dons, setDons] = useState([]);
    const { id } = useParams();

    const getCagnotte = async () => {
        const res = await fetch('http://127.0.0.1:8000/api/cagnottes/'+id, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
        });
        const data = await res.json();
        if(data.status == 200) {
            setCagnotte(data.cagnotte);
            setDons(data.dons);
        } else {
            window.location.reload();
        }
    }

    useEffect(() => {        
        getCagnotte();
    }, []);

    const pourcentage = {
        width: `${(cagnotte.montant_collecte / cagnotte.objectif_montant_vise) * 100}%`,
    }

    const handleClick = () => {
        setShowDonation(!showDonation);
        window.scrollTo(0, 0);
    }

    return (
        <>
            { 
                showDonation && (<Dons id={id} />) // N'oublie pas de le props dans le Dons
            }
            <section className="w-full h-auto py-16 px-28 flex items-center justify-center flex-col gap-4 max-1250:px-14 max-750:px-2">
                <h3 className="self-start font-bold text-4xl text-dark max-1090:hidden">{cagnotte.intitule}</h3>
                <div className="w-full flex gap-4 max-1090:items-center max-1090:justify-center max-520:p-2">
                    <div className="w-3/5 p-4 flex items-start justify-center gap-4 flex-col max-1090:w-5/6 max-750:w-full max-450:p-0">
                        <img src={`http://127.0.0.1:8000${cagnotte.image}`} alt="" className="w-full h-96 object-cover rounded-xl max-520:h-60" />	
                        <h3 className="self-start mt-2 font-bold text-3xl tracking-wider hidden text-dark max-1090:flex max-520:text-xl">Une lumière au bout du tumel</h3>
                        <div className="w-full p-2 items-center justify-center hidden flex-col gap-3 max-1090:flex">
                            <p className="self-start font-light text-gray-fill text-sm tracking-wide"><span className="font-medium text-gray-fill text-xl max-520:text-base">{cagnotte.montant_collecte} FCFA</span> recoltés sur un objectif de {cagnotte.objectif_montant_vise} FCFA</p>
                            <div className="w-full h-1 bg-gray-200 rounded-full max-750:h-1">
                                <div style={pourcentage} className="h-full bg-green-600 rounded-full"></div>
                            </div>
                            <span className="self-start font-normal text-base text-gray-600">{dons.length} dons</span>
                            <Link to={'/cagnote/soutenir/'+id} className="w-full p-2 text-center text-lg font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</Link>
                        </div>
                        <div className='w-full flex items-center justify-start gap-2'>
                            <img src={profile} alt='' className='rounded-full w-12 h-12 object-cover' />
                            <div className="font-normal text-dark text-lg max-750:text-base">{cagnotte.organisateur} organise cette cagnote</div>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className={`w-full ${isClicked ? '' : 'line-clamp-7' } mt-8 leading-loose shadow-inner-bottom max-750:text-sm`}>                            
                            <FroalaEditorView model={cagnotte.description} />
                        </div>
                        <button onClick={() => setIsClicked(true)} className={isClicked ? 'hidden' :'text-gray-800 mb-8 underline hover:no-underline'}>Lire la suite</button>                        
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className='w-full pl-2 my-6 flex items-center justify-center flex-col gap-2'>
                            <span className='self-start font-bold text-xl text-neutral-950'>Organisateur</span>
                            <div className='w-full py-2 flex justify-start gap-4'>
                                <div className='w-12 h-12 '>
                                    <img src={profile} alt='' className='w-full h-12 rounded-full object-cover' />
                                </div>
                                <div className='w-full flex items-start justify-center flex-col'>
                                    <span className="font-bold text-dark text-lg">{cagnotte.organisateur}</span>
                                    <span className="font-medium text-dark text-base">Organisateur</span>
                                </div>
                            </div>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className='w-full pl-2 my-8 flex items-start justify-center flex-col gap-4'>
                            <span className='font-bold text-xl text-dark tracking-wide'>Messages de soutien ({dons.length})</span>
                            <span className='font-normal text-base text-gray-700'>Faites un don et laissez un message de soutien.</span>
                            { dons.length > 0 &&
                                <>

                                    {dons.slice(0, 3).map((don, index) => (
                                        <div key={index} className='w-full mt-4 flex items-start gap-4'>
                                            <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                                <HandHeart size={30} strokeWidth={1.5} />
                                            </div>
                                            <div className='w-full'>
                                                <span className="font-bold text-dark text-base">{don.nom_donateur}</span>
                                                <div className='flex items-center justify-start my-2'>
                                                    <span className="font-normal text-gray-fill text-sm max-750:text-xs">{don.montant} FCFA</span>                             
                                                </div>
                                                <div className='w-full text-base font-normal max-750:text-xs'>
                                                    {don.message_donateur}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={handleClick} className="w-44 p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black hover:border-black max-750:w-full">Afficher plus</button>
                                </>
                            }
                            
                            
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <span className="pl-2">Créée le {cagnotte.date_debut}</span>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                    </div>
                    <div className="w-2/5 h-4/6 py-8 px-4 sticky top-4 flex items-center justify-center flex-col gap-3 shadow-all rounded-xl max-1090:hidden">
                        <div className="w-full p-2 flex items-center justify-center flex-col gap-3">
                            <p className="self-start font-light text-gray-fill text-base tracking-wide"><span className="font-medium text-gray-fill text-xl">{cagnotte.montant_collecte} FCFA</span> recoltés sur un objectif de {cagnotte.objectif_montant_vise} FCFA</p>
                            <div className="w-full h-1 bg-gray-200 rounded-full max-750:h-1">
                                <div style={pourcentage} className="h-full bg-green-600 rounded-full"></div>
                            </div>
                            <span className="self-start font-normal text-base text-gray-600">{dons.length} dons</span>
                            <Link to={'/cagnote/soutenir/'+id} className="w-full p-2 text-center text-lg font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</Link>
                        </div>                        
                    </div>
                </div>
            </section>
        </>
    );
};
export default DescCagnote;