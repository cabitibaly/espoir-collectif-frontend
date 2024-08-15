import hospital from '../assets/image/hospital.jpg';
import { useState } from "react";


const Montant = () => {
    const [montant, setMontant] = useState(0);
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('Anonyme');
    const [message, setmessage] = useState('');

    console.log(email, nom, message)

    const handleChange = (e, set) => {
        set(e.target.value);
    }

    const handleClick = (montant) => {
        setMontant(montant);
    }

    return (
        <>
            <section className="w-full h-auto p-4 bg-pear flex item-center justify-center">
                <div className="w-3/6 bg-white rounded-xl p-4 flex items-center justify-start flex-col gap-4 max-1250:w-4/6 max-990:w-full">
                    <div className="p-4 w-full flex gap-2">
                        <img src={hospital} alt="hospital" className="w-2/6 h-full rounded-xl object-cover max-990:hidden" />
                        <div className="w-4/6 flex items-start justify-center gap-2 flex-col p-2 max-990:w-full">
                            <p className="font-medium text-left text-dark text-lg max-750:text-base max-400:text-sm">Vous soutenez <span className="font-bold text-xl text-black max-750:text-base max-400:text-sm">Une lumière au bout du tumel</span></p>
                            <p className="font-normal text-left text-gray-600 text-lg max-750:text-base ax-400:text-sm">Votre don va aider <span className="font-bold text-xl text-gray-600 max-750:text-base ax-400:text-sm">Alison Smith</span></p>
                        </div>
                    </div>
                    <form onSubmit={''} className="p-4 w-full flex items-start justify-center flex-col gap-4">
                        <span className="font-bold text-black text-base max-450:text-xs">Entrez le montant de votre don</span>
                        <div className="w-full flex flex-wrap items-start justify-center gap-4">
                            <button onClick={() => handleClick(1000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                1 000
                            </button>
                            <button onClick={() => handleClick(5000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                5 000
                            </button>
                            <button onClick={() => handleClick(10000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                10 000
                            </button>
                            <button onClick={() => handleClick(25000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                25 000
                            </button>
                            <button onClick={() => handleClick(50000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                500 00
                            </button>
                            <button onClick={() => handleClick(100000)} className="border border-solid border-gray-400 w-24 h-16 max-450:w-20 max-450:h-14 max-450:text-lg flex items-center justify-center font-bold text-xl rounded-xl transition hover:bg-gray-100">
                                100 000
                            </button>
                        </div>
                        <div className="border-2 border-solid border-black p-2 w-full flex items-center justify-between rounded-xl">
                            <span className="font-bold text-xl tracking-wide max-450:text-base">FCFA</span>
                            <input value={montant}onChange={(e) => handleChange(e, setMontant)} type="text" maxLength={6} className="px-2 py-1 w-48 font-bold text-4xl text-black text-right outline-none max-450:text-xl max-450:w-32" required/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-900">Adresse Email</label>
                            <input type="email" id="email" 
                                onChange={(e) => handleChange(e, setEmail)} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg outline-none focus:ring-black focus:border-2 focus:border-black block w-full p-2.5" 
                                placeholder="john.doe@company.com" required 
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="nom" className="block mb-2 text-lg font-bold text-gray-900">Nom et prénon</label>
                            <input type="text" id="nom" value={nom} onChange={(e) => handleChange(e, setNom)} className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg outline-none focus:ring-black focus:border-2 focus:border-black block w-full p-2.5" placeholder="John Doe"/>
                        </div>
                        <div className="w-full">                            
                            <label htmlFor="message" className="block mb-2 text-lg font-bold text-gray-900 ">Un message de soutien</label>
                            <textarea id="message" onChange={(e) => handleChange(e, setmessage)} rows="4" className="block p-2.5 resize-none w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none focus:ring-black focus:border-black"  placeholder="Ecrivez votre message de soutien ici..."></textarea>
                        </div>
                        <button type='submit' className="w-full p-3 font-bold text-center text-xl text-white bg-green-700 rounded-xl transition duration-300 ease-in-out hover:scale-95">Je soutiens</button>
                    </form>
                </div>
            </section>
        </>
    );
};
export default Montant;