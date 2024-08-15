import { Link } from 'react-router-dom';
import yard from '../assets/image/yard.jpg';

const Explication = () => {
    return (
        <section className="p-4 mt-14 w-full h-auto flex items-center justify-center">
            <div className="w-4/5 h-auto flex items-center justify-center flex-col gap-4 max-990:w-full">
                <h3 className="font-bold text-center text-2xl text-black md:text-3xl">Espoir Collectif : comment ça marche</h3>
                <p className="font-bold text-lg text-black text-left sm:text-center md:text-2xl">Que vous soyez un particulier, un groupe ou une association, Espoir Collectif vous permet de lancer une cagnotte en ligne.</p>
                <div className='w-full h-500'>
                    <img src={yard} className="w-full h-full rounded-xl object-cover" alt="yard" />
                </div>
                <div className='w-full gap-4 grid items-center justify-start sm:w-5/6 md:grid-cols-2 xl:grid-cols-3 md:gap-8'>
                    <div className='h-52 flex items-start justify-start flex-col gap-4'>
                        <div className='border border-solid border-green-500 text-green-500 w-12 h-12 rounded-full flex items-center justify-center'>1</div>
                        <p className='font-bold text-xl text-center'>Créer un compte</p>
                    </div>
                    <div className='h-52 flex items-start justify-start flex-col gap-4'>
                        <div className='border border-solid border-green-500 text-green-500 w-12 h-12 rounded-full flex items-center justify-center'>2</div>
                        <p className='font-bold text-xl text-left'>Démarrez votre cagnotte</p>
                        <ul className='ml-8 list-disc text-base'>
                            <li>Définissez l’objectif de votre cagnotte</li>
                            <li>Racontez votre histoire</li>
                        </ul>
                    </div>
                    <div className='h-52 flex items-start justify-start flex-col gap-4'>
                        <div className='border border-solid border-green-500 text-green-500 w-12 h-12 rounded-full flex items-center justify-center'>3</div>
                        <p className='font-bold text-xl text-left'>Patientez pour que des personnes vous fasses des dons</p>
                    </div>
                </div>
                <Link to="/creer-une-cagnote" className="w-3/4 md:w-1/4 p-3 border border-solid border-green-800 text-center font-semibold text-white bg-green-800 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black ">Démarer une cagnote</Link>
            </div>
        </section>
    );
};
export default Explication;