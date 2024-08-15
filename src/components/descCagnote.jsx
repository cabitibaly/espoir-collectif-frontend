import { Link } from "react-router-dom";
import { useState } from 'react';
import { HandHeart, Dot } from 'lucide-react';
import hospital from '../assets/image/hospital.jpg'
import profile from '../assets/image/profil.jpg'
import Dons from "./dons";

const DescCagnote = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [showDonation, setShowDonation] = useState(false);

    const pourcentage = {
        width: `${(1/5) * 100}%`,
    }

    const handleClick = () => {
        setShowDonation(!showDonation);
        window.scrollTo(0, 0);
    }

    return (
        <>
            { 
                showDonation && (<Dons />)
            }
            <section className="w-full h-auto py-16 px-28 flex items-center justify-center flex-col gap-4 max-1250:px-14 max-750:px-2">
                <h3 className="self-start font-bold text-4xl text-dark max-1090:hidden">Une lumière au bout du tumel</h3>
                <div className="w-full flex gap-4 max-1090:items-center max-1090:justify-center max-520:p-2">
                    <div className="w-3/5 p-4 flex items-start justify-center gap-4 flex-col max-1090:w-5/6 max-750:w-full max-450:p-0">
                        <img src={hospital} alt="" className="w-full h-96 object-cover rounded-xl max-520:h-60" />
                        <h3 className="self-start mt-2 font-bold text-3xl tracking-wider hidden text-dark max-1090:flex max-520:text-xl">Une lumière au bout du tumel</h3>
                        <div className="w-full p-2 items-center justify-center hidden flex-col gap-3 max-1090:flex">
                            <p className="self-start font-light text-gray-fill text-sm tracking-wide"><span className="font-medium text-gray-fill text-xl max-520:text-base">1000 FCFA</span> recoltés sur un objectif de 5000 FCFA</p>
                            <div className="w-full h-1 bg-gray-200 rounded-full max-750:h-1">
                                <div style={pourcentage} className="h-full bg-green-600 rounded-full"></div>
                            </div>
                            <span className="self-start font-normal text-base text-gray-600">10 dons</span>
                            <Link to='/cagnote/detail/id/soutenir' className="w-full p-2 text-center text-lg font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</Link>
                        </div>
                        <div className='w-full flex items-center justify-start gap-2'>
                            <img src={profile} alt='' className='rounded-full w-12 h-12 object-cover' />
                            <div className="font-normal text-dark text-lg max-750:text-base">Alison Smith organise cette cagnote</div>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className={`w-full ${isClicked ? '' : 'line-clamp-7' } mt-8 leading-loose shadow-inner-bottom max-750:text-sm`}>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus platea id dolor purus tempor sit. 
                            Lacinia lectus montes a; mauris nisl scelerisque facilisi amet. In eros bibendum maecenas malesuada vehicula placerat elementum etiam. 
                            Etiam ullamcorper aliquet natoque posuere imperdiet efficitur. Eget ligula iaculis dictum tellus tincidunt mus. Vulputate enim nulla, vulputate fames posuere mauris. 
                            Magnis in est dapibus vel efficitur pellentesque. Class bibendum elementum fringilla gravida lobortis tempor massa praesent in?
                            Gravida primis sollicitudin praesent penatibus aliquam volutpat faucibus. Mus vivamus laoreet malesuada lectus egestas. 
                            Fringilla placerat sagittis natoque, a porta class turpis metus. Sodales venenatis montes risus, hac curabitur sociosqu at. 
                            Nibh vivamus dictumst accumsan elit pharetra malesuada cras. Nullam purus adipiscing justo nam pellentesque potenti commodo dolor. 
                            Pretium feugiat sed turpis scelerisque; class facilisis ridiculus efficitur. Mauris posuere felis auctor imperdiet quam semper accumsan amet. 
                            Egestas dolor mauris nisi metus odio ornare, laoreet ridiculus habitasse. Dapibus sollicitudin montes, quam dictumst varius molestie aenean enim suscipit.
                        </div>
                        <button onClick={() => setIsClicked(true)} className={isClicked ? 'hidden' :'text-gray-800 mb-8 underline hover:no-underline'}>Lire la suite</button>
                        <hr className='w-full h-0.5 hidden bg-neutral-400 max-1090:block' />
                        <div className="w-full pl-2 my-4 hidden items-center justify-center flex-col gap-4 max-1090:flex">
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center max-520:w-10 max-520:h-10'>
                                    <HandHeart size={ window.innerWidth <= 750 ? 25 : 30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base max-520:text-sm">Alison Smith</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base max-520:text-sm">100 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Don récent</span>                                
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={ window.innerWidth <= 750 ? 25 : 30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base max-520:text-sm">Anry Ken</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base max-520:text-sm">300 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Don le plus élévé</span>                                
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={ window.innerWidth <= 750 ? 25 : 30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base max-520:text-sm">Noelle Silva</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base max-520:text-sm">250 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Premier don</span>                                
                                    </div>
                                </div>
                            </div>
                            <Link to='' className="w-full p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Afficher tout</Link>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className='w-full pl-2 my-6 flex items-center justify-center flex-col gap-2'>
                            <span className='self-start font-bold text-xl text-neutral-950'>Organisateur</span>
                            <div className='w-full py-2 flex justify-start gap-4'>
                                <div className='w-12 h-12 '>
                                    <img src={profile} alt='' className='w-full h-12 rounded-full object-cover' />
                                </div>
                                <div className='w-full flex items-start justify-center flex-col'>
                                    <span className="font-bold text-dark text-lg">Alison Smith</span>
                                    <span className="font-medium text-dark text-base">Organisateur</span>
                                    <span className="font-medium text-dark text-base">Bobo-Dioulasso</span>
                                </div>
                            </div>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <div className='w-full pl-2 my-8 flex items-start justify-center flex-col gap-4'>
                            <span className='font-bold text-xl text-dark tracking-wide'>Messages de soutien (117)</span>
                            <span className='font-normal text-base text-gray-700'>Faites un don et laissez un message de soutien.</span>
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-bold text-dark text-base">Alison Smith</span>
                                    <div className='flex items-center justify-start'>
                                        <span className="font-normal text-gray-fill text-sm max-750:text-xs">1000 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-600 text-sm max-750:text-xs">23 h</span>                                
                                    </div>
                                    <div className='w-full text-base font-normal max-750:text-xs'>
                                        Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur hac penatibus sociosqu mus placerat. 
                                        Montes varius litora amet condimentum enim. Commodo at natoque posuere accumsan varius eleifend, vivamus neque inceptos. 
                                    </div>
                                </div>
                            </div>
                            <Link to='' className="w-44 p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200 hover:text-black hover:border-black max-750:w-full">Afficher plus</Link>
                        </div>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                        <span className="pl-2">Créée le 04 Août 2024</span>
                        <hr className='w-full h-0.5 bg-neutral-400' />
                    </div>
                    <div className="w-2/5 h-4/6 py-8 px-4 sticky top-4 flex items-center justify-center flex-col gap-3 shadow-all rounded-xl max-1090:hidden">
                        <div className="w-full p-2 flex items-center justify-center flex-col gap-3">
                            <p className="self-start font-light text-gray-fill text-base tracking-wide"><span className="font-medium text-gray-fill text-xl">1000 FCFA</span> recoltés sur un objectif de 5000 FCFA</p>
                            <div className="w-full h-1 bg-gray-200 rounded-full max-750:h-1">
                                <div style={pourcentage} className="h-full bg-green-600 rounded-full"></div>
                            </div>
                            <span className="self-start font-normal text-base text-gray-600">10 dons</span>
                            <Link to='/cagnote/detail/id/soutenir' className="w-full p-2 text-center text-lg font-semibold text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</Link>
                        </div>
                        <div className="w-full flex items-center justify-center flex-col gap-4">
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base">Alison Smith</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base">100 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Don récent</span>                                
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base">Anry Ken</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base">300 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Don le plus élévé</span>                                
                                    </div>
                                </div>
                            </div>
                            <div className='w-full mt-4 flex items-start gap-4'>
                                <div className='w-12 h-12 bg-pear rounded-full flex items-center justify-center'>
                                    <HandHeart size={30} strokeWidth={1.5} />
                                </div>
                                <div className='w-full'>
                                    <span className="font-normal text-dark text-base">Noelle Silva</span>
                                    <div className='w-full flex items-center justify-'>
                                        <span className="font-semibold text-gray-fill text-base">250 XOF</span>
                                        <Dot size={40} strokeWidth={1.5} color='#c0bdb8' />
                                        <span className="font-normal text-gray-800 text-base underline">Premier don</span>                                
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleClick} className="w-full p-2 mt-4 border border-solid border-gray-500 text-center font-semibold text-black bg-neutral-100 rounded-xl transition duration-300 ease-in-out hover:bg-gray-200">Afficher tout</button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};
export default DescCagnote;